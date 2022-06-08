
def log(logType: int, text: str):
    types = {
        0: "Alert",
        1: "Battery"
    }

    logType = types.get(logType, "nothing")

    return \
        {
            "Log": logType,
            "Message": text
        }
