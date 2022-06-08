from src.log.log import log


class Fail:
    def __init__(self, msg: str):
        self.msg = msg

    def __str__(self):
        return f"Fail: {self.msg}"
