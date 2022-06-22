from src.tts.TTS import TTS
from src.log.log import Log


async def alert(text: str):
    await TTS(text)
    return Log(0, text)
