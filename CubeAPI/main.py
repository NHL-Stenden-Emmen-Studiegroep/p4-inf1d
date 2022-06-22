import json
import math
import asyncio
from typing import Optional
from fastapi import FastAPI, status, Response, HTTPException

from src.calendar import Meeting, Calendar
from src.log.log import Log
from src.types import SyncType, TimerStates, ReturnJSON, DetailJSON
from src.tts.TTS import TTS

app = FastAPI()

Log().cleanFile()

is_timer_running = 0

@app.get("/")
def main():
    return {"Message": "Hello"}


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

    JSON = json.dumps(
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
    return JSON


@app.post("/timer/{ms}")
async def timer(cmd: str, ms: int):
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

@app.post("/timer/abort")
async def stop_timer():
    is_timer_running = 0
    tts = TTS("je timer is gestopt")
    tts.play()
    return

