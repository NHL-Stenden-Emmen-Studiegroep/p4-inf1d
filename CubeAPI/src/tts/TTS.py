import os
import platform
from gtts import gTTS
from src.log.log import Log


class TTS:
    def __init__(self, text: str, lang: str = "nl") -> None:
        self.text = text
        self.temp = "./src/tts/temp.mp3"
        if platform.system() == "Windows":
            cmd = "start"
        else:
            cmd = "mpg321"
        self.cmd = f"{cmd} {self.temp}"
        self.gtts = gTTS(text=self.text, lang=lang, slow=False)
        self.gtts.save("./src/tts/temp.mp3")
        Log(f"Created TTS -> {self.text}")

    def play(self):
        print(os.system(self.cmd))
        Log(f"Played TTS -> {self.text}")
