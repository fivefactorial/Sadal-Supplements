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
MagicItemsList["staffofthejungle"] = {
    name: "Staff of the Jungle",
    source: ["SS", 7],
    type: "staff",
    rarity: "rare",
    description: "This +2 quarterstaff gives me a +2 bonus on spell attacks. It has 10 charges, regaining 1d6+4 at dawn, 5% chance of losing its magic when its last charge is used. As an action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another action to revert it back.",
    descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 10 charges for the following properties. It regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
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
    source: ["SS", 7],
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