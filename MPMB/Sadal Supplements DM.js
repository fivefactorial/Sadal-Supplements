if (sheetVersion < 12001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Sadal Supplements DM.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements",
    abbreviation: "SS",
    group: "Sadal Supplements",
    campaignSetting: "Sadal",
    date: "2022/06/28"
};

MagicItemsList["frostcleaver"] = {
    name: "Frostcleaver",
    source: ["SS", 1],
    type: "weapon (greataxe)",
    rarity: "rare",
    description: 'This magical greataxe deals an additional 1d6 frost damage and grants the wielder resistance to fire damage.',
    weight: 7,
    weaponsAdd: ["Frostcleaver"],
    attunement: true,
    dmgres: ["Fire"],
    weaponOptions: {
        baseWeapon: "greataxe",
        regExpSearch: /\bfrostcleaver\b/i,
        name: "Frostcleaver",
        source: ["SS", 1],
        description: "Heavy, Two-Handed; Deals an additional 1d6 frost damage.",
        modifiers: [0, 0]
    }
}
MagicItemsList["ringofflying"] = {
    name: "Ring of Flying",
    source: ["SS", 2],
    type: "ring",
    rarity: "very rare",
    description: 'As a bonus action, the ring can be activated or deactivated to grant 60 ft. flying speed. It lasts for a total of 5 minutes per day.',
    weight: 0,
    attunement: true,
}
MagicItemsList["loidenne"] = {
    name: "Loidenne",
    source: ["SS", 3],
    type: "weapon (Scimitar)",
    rarity: "legendary",
    description: 'As an action I can activate an 20 ft. aura around me where no creature or object can teleport into or out of. This does not affect permanent portals, the wish spell, or comparable magic. In addition I can enprison a dying elemental / fiend / celectial in the sword.',
    weight: 3,
    weaponsAdd: ["Loidenne"],
    action: [
        ["bonus action", " (enprison)"]
    ],
    attunement: true,
    weaponOptions: {
        baseWeapon: "scimitar",
        regExpSearch: /\bloidenne\b/i,
        name: "Loidenne",
        source: ["SS", 1],
        description: "Finesse, Light; +2.",
        modifiers: [2, 2]
    }
}