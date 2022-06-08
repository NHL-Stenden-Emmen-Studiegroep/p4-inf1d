import os
import platform

from gtts import gTTS


def tts(text: str):
    lang = "nl"

    gttsObject = gTTS(text=text, lang=lang, slow=False)
    gttsObject.save("./src/tts/temp.mp3")

    # Remove the windows if statements and keep the elif statements when uploading
    if platform.system() == 'Windows':
        os.system("start ./src/tts/temp.mp3")

    elif platform.system() == 'Linux':
        os.system("mpg321 ./src/tts/temp.mp3")

