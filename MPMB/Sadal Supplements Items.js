if (sheetVersion < 13001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Sadal Supplements Items.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements [Items]",
    abbreviation: "SS",
    group: "Sadal Supplements",
    campaignSetting: "Sadal",
    url: "http://dndwiki.fivefactorial.se/index.php/Equipment",
    date: "2022/06/25"
};

MagicItemsList["frostcleaver"] = {
    name: "Frostcleaver",
    source: ["SS", 1],
    type: "weapon (greataxe)",
    rarity: "rare",
    magicItemTable: "F",
    description: 'This magical greataxe deals an additional 1d6 frost damage and grants the wielder resistance to fire damage.',
    descriptionFull: 'This magical greataxe deals an additional 1d6 frost damage and grants the wielder resistance to fire damage.',
    weight: 7,
    weaponsAdd: ["Frostcleaver"],
    attunement: true,
    dmgres: ["Fire"],
    weaponOptions: {
        baseWeapon: "greataxe",
        regExpSearch: /\bfrostcleaver\b/i,
        name: "Greataxe",
        source: ["SS", 1],
        description: "Heavy, Two-Handed; Deals an additional 1d6 frost damage.",
        modifiers: [0, 0]
    }
}
MagicItemsList["ringofflying"] = {
    name: "Ring of Flying",
    source: ["SS", 2],
    type: "wonderous item",
    rarity: "very rare",
    magicItemTable: "F",
    description: 'As a bonus action, the ring can be activated or deactivated to grant 60 ft. flying speed. It lasts for a total of 5 minutes per day.',
    descriptionFull: 'As a bonus action, the ring can be activated or deactivated to grant 60 ft. flying speed. It lasts for a total of 5 minutes per day.',
    weight: 0,
    attunement: true,
}