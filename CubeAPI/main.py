from typing import Optional
from fastapi import FastAPI
from src.log.log import Log

from src.connection.connect import connect
from src.tts.TTS import TTS
from src.bluetooth.bluetooth import getConnection, toggleBluetooth

app = FastAPI()

Log().cleanFile()


@app.get("/")
def main():
    return {"Message": "Hello"}


@app.get("/connect/{turn_on}")
async def connect(turn_on: bool):
    # return await connect()
    # async def bluetooth_power(turn_on):
    await toggleBluetooth(turn_on)
    return {"status": "success", "state": f"{turn_on}"}


@app.get("/show/")
async def getDevices():
    return await getConnection()


@app.get("/logs/get")
def getLog(msg: Optional[str] = None, date: Optional[str] = None):
    l = Log()
    return l.getLogs(date)


@app.get("/alert/{text}")
def alert(text: str):
    tts = TTS(text)
    tts.play()
    return {"status": "Success"}


@app.get("/timer/{state}")
def timer(state: str, time: int = 0):
    if state == "on" or state == "off":
        if state == "off":
            if time > 0:
                return {"state": f"{state}", "time": f"{time}"}
            else:
                return {"state": f"{state}"}
        return {"state": f"{state}"}
    else:
        return {"fail": "state must be on or off"}
