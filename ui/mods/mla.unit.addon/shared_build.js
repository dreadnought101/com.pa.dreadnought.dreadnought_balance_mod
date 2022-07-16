var newBuild = {
    "/pa/units/land/ls_lynx/lynx.json": ["L_vehicle", 0, { row: 2, column: 6, titans: true }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}