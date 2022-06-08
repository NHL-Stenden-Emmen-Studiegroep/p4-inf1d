from src.tts.TTS import tts
from src.log.log import log


async def alert(text: str):
    await tts(text)
    return log(0, text)