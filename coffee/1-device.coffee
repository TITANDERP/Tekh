class Device

  @SAVE_KEY : "_GurkSavedGame"
  @SETTINGS_KEY : "_GurkSetting_"

  @hasSavedGame : =>
    !!getData(Device.SAVE_KEY)

  @saveGame : (game) =>
    putData(Device.SAVE_KEY, game)

  @loadGame : =>
    getData(Device.SAVE_KEY)

  @clearGame : =>
    putData(Device.SAVE_KEY, null)

  @getSetting : (name, defaultValue) =>
    key = Device.SETTINGS_KEY + name
    if (!!getData(key))
      if (getData(key) == "false") then false else true
    else
      defaultValue

  @setSetting : (name, value) =>
    key = Device.SETTINGS_KEY + name
    putData(key, value)
