import json
import asyncio
import uvicorn
import socket
from typing import Optional

import threading
import time

import requests
from fastapi import FastAPI, status, Response, HTTPException

from src.calendar import Meeting, Calendar
from src.log.log import Log
from src.types import SyncType, TimerStates, ReturnJSON, DetailJSON
from src.tts.TTS import TTS

app = FastAPI()

Log().cleanFile()

is_timer_running = 0

ip_set = 0

class BackgroundTasks(threading.Thread):
    def run(self):
        global ip_set
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        text = "mijn IP is "+ip
        while ip_set == 0:
            tts = TTS(text)
            tts.play()
            time.sleep(5)

@app.on_event("startup")
async def startup_event():
    t = BackgroundTasks()
    t.start()

@app.get("/")
def main():
    return {"Message": "Hello"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)

@app.post("/ip")
async def stop_echo():
    global ip_set
    ip_set = 1
    return

@app.get("/logs")
def getlog(date: Optional[str] = None):
    logs = Log()
    return logs.getLogs(date)

@app.get("/alert/{text}")
def alert(text: str):
    tts = TTS(text)
    tts.play()
    return {"detail": "Success"}

@app.get("/calendar/{calendar_options}")
def calendar(calendar_options: SyncType) -> ReturnJSON:
    if calendar_options is SyncType.SYNC:
        pass
    elif calendar_options is SyncType.GET:
        return Calendar.getNext()
    return ReturnJSON(detail=DetailJSON(message="", type=status.HTTP_200_OK))


@app.post("/calendar/add")
def calendar(date: str,
             title: str,
             location: str,
             description: str,
             time_begin: str,
             time_end: str):

    stmt = json.dumps(
        {
            "date": date,
            "title": title,
            "location": location,
            "description": description,
            "time": {
                "begin": time_begin,
                "end": time_end
            }
        }
    )

    # meeting = Meeting(JSON)
    # return Calendar.add(meeting)
    return stmt


@app.post("/timer/{ms}")
async def timer(ms: int):
    global is_timer_running
    t = ms
    is_timer_running = 0
    is_timer_running = 1
    while t and is_timer_running:
        await asyncio.sleep(1)
        t -= 1000
    if is_timer_running:
        tts = TTS("je timer is voorbij")
        tts.play()
    is_timer_running = 0
    return

@app.post("/abort")
async def stop_timer():
    global is_timer_running
    is_timer_running = 0
    tts = TTS("je timer is gestopt")
    tts.play()
    return

