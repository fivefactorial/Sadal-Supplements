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
    description: 'The staff has 10 Charges, regaining 1d6+4 expended charges at dusk. If I use its last charge, roll a d20. On a 1, it disintigrates. I can use its charges to cast Inflict Wounds (1 ch), Blindness/Deafness (2 ch), Vampiric Touch (3 ch), Blight (4 ch), or False Life (5th-level version, 5 ch) using my spellcasting ability.',
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
        name: "5 charges; 5th level",
        spells: ["false life"],
        selection: ["false life"],
        firstCol: 5
    }],
    spellChanges: {
        "false life": {
            nameShort: "False Life (5th level)",
            description: "I gain 1d4+24 temporary hit points for the duration",
        }
    }
}
MagicItemsList["staffofthejungle"] = {
    name: "Staff of the Jungle",
    source: ["SS", 7],
    type: "staff",
    rarity: "rare",
    description: "",
    attunement: true,
    weight: 4,
    prerequisite: "Requires attunement by a druid",
    prereqeval: function(v) { return classes.known.druid ? true : false; },
    action: [
        ["action", ""]
    ],
    usages: 10,
    recovery: "dawn",
    additional: "regains 1d6+4",
    weaponsAdd: ["Staff of the Jungle"],
    weaponOptions: {
        baseWeapon: "quarterstaff",
        regExpSearch: /^(?=.*staff)(?=.*jungle).*$/i,
        name: "Staff of the Jungle",
        source: ["SS", 7],
        modifiers: [1, 1]
    },
    calcChanges: {
        spellCalc: [
            function(type, spellcasters, ability) {
                if (type == "attack") return 1;
            },
            "While holding the Staff of the Jungle, I have a +1 bonus to spell attack rolls."
        ]
    },
    spellcastingAbility: "class",
    spellFirstColTitle: "Ch",
    spellcastingBonus: [{
        name: "At will",
        spells: ["plant growth"],
        selection: ["plant growth"],
        firstCol: "atwill"
    }, {
        name: "1 charge",
        spells: ["animal friendship", "speak with animals"],
        selection: ["animal friendship", "speak with animals"],
        firstCol: 1,
        times: 2
    }, {
        name: "2 charges",
        spells: ["locate animals or plants"],
        selection: ["locate animals or plants"],
        firstCol: 2,
    }, {
        name: "3 charges",
        spells: ["speak with plants"],
        selection: ["speak with plants"],
        firstCol: 3
    }, {
        name: "5 charges",
        spells: ["awaken"],
        selection: ["awaken"],
        firstCol: 5
    }],
    spellChanges: {
        "awaken": {
            time: '1 a',
            changes: 'Casting time is only 1 action instead of 8 hours.'
        },
        "plant growth": {
            time: '8h',
            description: '1 mile diameter plants yield double food at harvest',
            changes: 'Only the 8 hours version is available.'
        }
    }
}
MagicItemsList["gemofunderstanding"] = {
    name: "Gem of Understanding",
    source: ["SS", 8],
    type: "wondrous item",
    rarity: "uncommon",
    description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in the gem's language",
    weight: 0.5,
    allowDuplicates: true,
    choices: ["White (Common)", "Blue (Dwarvish)", "Green (Elvish)", "Gray (Giant)", "Red (Gnomish)", "Magenta (Goblin)", "Pink (Halfling)", "Black (Orc)"],
    "white (common)": {
        name: "White Gem of Understanding",
        sortname: "Gem of Understanding, White",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in common.",
    },
    "blue (dwarvish)": {
        name: "Blue Gem of Understanding",
        sortname: "Gem of Understanding, Blue",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in dwarvish.",
    },
    "green (elvish)": {
        name: "Green Gem of Understanding",
        sortname: "Gem of Understanding, Green",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in elvish.",
    },
    "gray (giant)": {
        name: "Gray Gem of Understanding",
        sortname: "Gem of Understanding, Gray",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in giant.",
    },
    "red (gnomish)": {
        name: "Red Gem of Understanding",
        sortname: "Gem of Understanding, Red",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in gnomish.",
    },
    "magenta (goblin)": {
        name: "Magenta Gem of Understanding",
        sortname: "Gem of Understanding, Magenta",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in goblin.",
    },
    "pink (halfling)": {
        name: "Pink Gem of Understanding",
        sortname: "Gem of Understanding, Pink",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in halfling.",
    },
    "black (orc)": {
        name: "Black Gem of Understanding",
        sortname: "Gem of Understanding, Black",
        description: "Once as an action, I can crack the gem open and let it's liquid inside seap into my skin. For one hour I gain proficiency in orc.",
    }
}
MagicItemsList["amuletofforesight"] = {
    name: "Amulet of Foresight",
    source: ["SS", 9],
    type: "wondrous item",
    rarity: "Legendary",
    description: "Once per year, I can cast Foresight on myself. Requires me to have been attuned to it for at least one month before I can use it and it recharges somewhen in the fall.",
    attunement: true,
    weight: 0,
    action: [
        ["action", ""]
    ],
    usages: 1,
    recovery: "unknown",
    spellcastingBonus: [{
        spells: ["foresight"],
        selection: ["foresight"],
    }],
    spellChanges: {
        "foresight": {
            description: "I can't be surprised; adv. on attacks, ability checks, and saves; dis. on attacks vs. me",
            range: "Self",
            time: "1 a",
            changes: 'Only requires an action and can only target self.'
        }
    }
}

MagicItemsList["staff of the specialist"] = {
    name: "Staff of the Specialist",
    source: ["SS", 10],
    type: "staff",
    rarity: "legendary",
    description: "",
    descriptionLong: "",
    descriptionFull: "",
    attunement: true,
    weight: 4,
    prerequisite: "Requires attunement someone who can cast at least one 5th level spell",
    prereqeval: function(v) { return v.isSpellcastingClass; },
    usages: 25,
    recovery: "dawn",
    additional: "regains 2d10",
    weaponsAdd: ["Staff of the Specialist"],
    weaponOptions: {
        baseWeapon: "quarterstaff",
        regExpSearch: /^(?=.*staff)(?=.*specialist).*$/i,
        name: "Staff of the Specialist",
        source: ["SS", 10],
        modifiers: [2, 2]
    },
    action: [
        ["action", " (Retributive Strike)"]
    ],
    spellcastingAbility: "class",
    spellFirstColTitle: "Ch",
    choices: ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"],
    "abjuration": {
        spellcastingBonus: [{
            name: "Abjuration",
            spells: ["mage armor", "lesser restoration", "protection from energy", "freedom of movement", "antilife shell"],
            selection: ["mage armor", "lesser restoration", "protection from energy", "freedom of movement", "antilife shell"],
            times: 5
        }]
    },
    "conjuration": {
        spellcastingBonus: [{
            name: "Conjuration",
            spells: ["entangle", "web", "sleet storm", "grasping vine", "insect plague"],
            selection: ["entangle", "web", "sleet storm", "grasping vine", "insect plague"],
            times: 5
        }]
    },
    "divination": {
        spellcastingBonus: [{
            name: "Divination",
            spells: ["comprehend languages", "find traps", "clairvoyance", "arcane eye", "commune with nature"],
            selection: ["comprehend languages", "find traps", "clairvoyance", "arcane eye", "commune with nature"],
            times: 5
        }]
    },
    "enchantment": {
        spellcastingBonus: [{
            name: "Enchantment",
            spells: ["bless", "hold person", "enemies abound", "dominate beast", "modify memory"],
            selection: ["bless", "hold person", "enemies abound", "dominate beast", "modify memory"],
            times: 5
        }]
    },
    "evocation": {
        spellcastingBonus: [{
            name: "Evocation",
            spells: ["thunderwave", "darkness", "fireball", "otiluke's resilient sphere", "cone of cold"],
            selection: ["thunderwave", "darkness", "fireball", "otiluke's resilient sphere", "cone of cold"],
            times: 5
        }]
    },
    "illusion": {
        spellcastingBonus: [{
            name: "Illusion",
            spells: ["color spray", "nystul's magic aura", "phantom steed", "hallucinatory terrain", "mislead"],
            selection: ["color spray", "nystul's magic aura", "phantom steed", "hallucinatory terrain", "mislead"],
            times: 5
        }]
    },
    "necromancy": {
        spellcastingBonus: [{
            name: "Necromancy",
            spells: ["ray of sickness", "gentle repose", "bestow curse", "blight", "contagion"],
            selection: ["ray of sickness", "gentle repose", "bestow curse", "blight", "contagion"],
            times: 5
        }]
    },
    "transmutation": {
        spellcastingBonus: [{
            name: "Transmutation",
            spells: ["jump", "magic weapon", "haste", "giant insect", "skill empowerment"],
            selection: ["jump", "magic weapon", "haste", "giant insect", "skill empowerment"],
            times: 5
        }]
    }
}