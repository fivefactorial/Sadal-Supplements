if (sheetVersion < 13001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Sadal Supplements Items.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements [Items]",
    abbreviation: "SS",
    group: "Sadal Supplements",
    campaignSetting: "Sadal",
    date: "2022/06/27"
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
MagicItemsList["necklaceofhiding"] = {
    name: "Necklace of Hiding",
    source: ["SS", 4],
    type: "wonderous item",
    rarity: "very rare",
    description: 'Thick necklace turns me invisible as long as I stand still for at least 1 minute and are not in direct sunlight.',
    weight: 0,
    attunement: true,
}
MagicItemsList["ringofsustenance"] = {
    name: "Ring of Sustenance",
    source: ["SS", 5],
    type: "ring",
    rarity: "uncommon",
    description: 'While the ring is active I do not have to drink nor eat. In addition, I only need to sleep 2 hours per day to feel rested. This has no effect on elves. To benefit from the ring it must be worn for at least one week. If ever removed, I have to wear it for another seven days before it activates.',
    weight: 0,
    attunement: false,
}

MagicItemsList["staffofthenecromancer"] = {
    name: "Staff of the Necromancer",
    source: ["SS", 6],
    type: "staff",
    rarity: "very rare",
    description: 'aaa',
    weight: 4,
    attunement: true,
    dmgres: ["Necrotic"],
    prerequisite: "Requires attunement by a druid, sorcerer, warlock, or wizard",
    prereqeval: function(v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
    usages: 10,
    recovery: "dusk",
    additional: "regains 1d6+4",
    spellcastingAbility: "class",
    spellFirstColTitle: "Ch",
    spellcastingBonus: [{
        name: "1 charge",
        spells: ["inflict wounds"],
        selection: ["inflict wounds"],
        firstCol: "1"
    }, {
        name: "2 charges",
        spells: ["blindness/deafness"],
        selection: ["blindness/deafness"],
        firstCol: 2
    }, {
        name: "3 charges",
        spells: ["vampiric touch"],
        selection: ["vampiric touch"],
        firstCol: 3
    }, {
        name: "4 charges",
        spells: ["blight"],
        selection: ["blight"],
        firstCol: 4
    }, {
        name: "5 charges",
        spells: ["false life"],
        selection: ["false life"],
        firstCol: 5
    }],
    spellChanges: {
        "false life": {
            description: "I gain 1d4+24 temporary hit points for the duration (the spell is cast at 5th level)",
        }
    }
}