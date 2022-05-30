from fastapi import FastAPI
from src.connection.connect import connect
from src.tts.TTS import tts

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/connect/")
def getConnection():
    return connect()


@app.get("/meetingAlert/{title}")
async def meetingAlert(title: str):
    await tts(title)
    return {"status": f"Success"}
