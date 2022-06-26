from winrt.windows.devices import radios
import bluetooth


async def getConnection():
    print('Searching for nearby devices...')
    nearby_devices = bluetooth.discover_devices(duration=8, lookup_names=True,
                                                flush_cache=True)
    print('found %d devices' % len(nearby_devices))

    for addr, name in nearby_devices:
        try:
            print(' %s - %s' % (addr, name))
        except():
            print(' %s - %s' % (addr, name.encode('utf-8', 'replace')))


async def toggleBluetooth(turn_on: bool):
    all_radios = await radios.Radio.get_radios_async()
    for this_radio in all_radios:
        if this_radio.kind == radios.RadioKind.BLUETOOTH:
            if turn_on:
                result = await this_radio.set_state_async(radios.RadioState.ON)
            else:
                result = await this_radio.set_state_async(radios.RadioState.OFF)


