from enum import Enum

from pydantic import BaseModel


class TimerStates(str, Enum):
    ON = "on"
    OFF = "off"


class SyncType(str, Enum):
    SYNC = "sync"
    GET = "get"
    ADD = "add"


class DetailJSON(BaseModel):
    message: str
    type: int


class ReturnJSON(BaseModel):
    detail: DetailJSON
