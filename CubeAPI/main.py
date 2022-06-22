import json
import math
from typing import Optional
from fastapi import FastAPI, status, Response, HTTPException

from src.calendar import Meeting, Calendar
from src.log.log import Log
from src.types import SyncType, TimerStates, ReturnJSON, DetailJSON
from src.tts.TTS import TTS

app = FastAPI()

Log().cleanFile()


@app.get("/")
def main():
    return {"Message": "Hello"}


@app.get("/logs")
def getLog(date: Optional[str] = None):
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


@app.get("/timer/{state}", status_code=200)
def timer(state: TimerStates, response: Response, time: int = 0, pause: bool = False) -> ReturnJSON:
    # check if state is OFF
    if state == TimerStates.OFF:

        # Check if pause is True
        if pause:
            alert(f"Timer is uitgezet, het is nu tijd voor pauze")
            Log(f"Timer is set to {state}")
            return ReturnJSON(
                detail=DetailJSON(
                    message="Timer turned off.",
                    type=status.HTTP_200_OK
                )
            )

        # Check if time is greater than 0
        if time > 0:

            minutes = math.floor(time / 60)
            seconds = math.floor(time % 60)
            alert(f"Timer is uitgezet, er zijn nog {minutes} minuten en {seconds} seconden over")
            Log(f"Timer is set to {state} with {minutes} minutes and {seconds} seconds remaining")
            return ReturnJSON(
                detail=DetailJSON(
                    message=f"Timer turned off. Available time is {minutes} minutes and {seconds} seconds.",
                    type=status.HTTP_200_OK
                )
            )

        # Else if timer is 0
        elif time == 0:
            alert(f"Timer is uitgezet.")
            Log(f"Timer is set to {state}")
            return ReturnJSON(
                detail=DetailJSON(
                    message="Timer turned off.",
                    type=status.HTTP_200_OK
                )
            )

        # Else send a fail message
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail={
                    "msg": "Timer can't be less than 0",
                    "type": status.HTTP_400_BAD_REQUEST
                }
            )

    # Timer is ON
    else:
        alert("Timer is gestart")
        Log(f"Timer is set to {state}")
        return ReturnJSON(
            detail=DetailJSON(
                message="Timer turned on.",
                type=status.HTTP_200_OK
            )
        )
