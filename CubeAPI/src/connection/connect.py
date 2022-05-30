from getmac import get_mac_address as gma

pathFile = "./src/connection/MAC.txt"


def connect(mac: str = gma()) -> dict[str, str]:
    if not isConnected(mac):
        return {"message": f"Cannot connect to the Cube"}
    else:
        macFile = open(pathFile, "w")
        macFile.write(mac)
        macFile.close()

        return {"message": f"Connected to the Cube"}


def isConnected(mac: str) -> bool:
    try:
        macFile = open(pathFile, "r")
        tempMac = macFile.read()
        macFile.close()
    except():
        return True
    else:
        if tempMac == mac:
            return True
        else:
            return False
