from gtts import gTTS

import os

text = ""

lang = "nl"

gttsObject = gTTS(text=text, lang=lang, slow=False)

gttsObject.save("temp.mp3")


#########################
#
# Windows command line
#
#########################

# os.system("start temp.mp3")


#########################
#
# Linux command line
#
#########################

# os.system("mpg321 temp.mp3")
