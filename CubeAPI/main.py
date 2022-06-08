from typing import Optional
from fastapi import FastAPI
from src.connection.connect import connect
from src.tts.TTS import tts
from winrt.windows.devices import radios
from src.bluetooth.bluetooth import getConnection, toggleBluetooth
import asyncio

app = FastAPI()


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
def getLog(date: Optional[str]):
    return {"test"}


@app.get("/alert/{text}")
def alert(text: str):
    tts(text)
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
