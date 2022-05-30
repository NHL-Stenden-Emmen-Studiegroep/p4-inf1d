from fastapi import FastAPI
from src.tts.TTS import tts
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

@app.get("/meetingAlert/{title}")
async def meetingAlert(title: str):
    tts(title)
    return {f"{title}"}
