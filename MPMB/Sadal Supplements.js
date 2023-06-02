if (sheetVersion < 12001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Sadal Supplements.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements",
    abbreviation: "SS",
    group: "Sadal Campaign Setting",
    date: "2023/06/02"
};

// RACES

RaceList["ihlathian"] = {
    regExpSearch: /^(?=.*ihlathian).*$/i,
    name: "Ihlathian",
    sortname: "Human, Ihlathian",
    source: ["SS", 0],
    plural: "Ihlathians",
    size: 3,
    speed: {
        walk: { spd: 30, enc: 20 },
    },
    languageProfs: [1, "Common"],
    improvements: "",
    scores: [0, 0, 2, 0, 2, 0],
    trait: "",
    weaponProfs: [false, false, ["dagger", "yklwa"]],
    skillstxt: "Choose either Survival or Stealth",
};

RaceList["lestorian"] = {
    regExpSearch: /^(?=.*lestorian).*$/i,
    name: "Lestorian",
    sortname: "Human, Lestorian",
    source: ["SS", 0],
    plural: "Lestorians",
    size: 3,
    speed: {
        walk: { spd: 30, enc: 20 },
    },
    languageProfs: [1, "Common"],
    improvements: "",
    scores: [0, 0, 0, 0, 0, 0],
    trait: "",
    scorestxt: "+2 to any ability score and +1 to any other",
    skillstxt: "Choose one skill you received from your class or background. You can add double your proficiency bonus to rolls made with that skill.",
};

RaceList["northener"] = {
    regExpSearch: /^(?=.*northener).*$/i,
    name: "Northener",
    sortname: "Human, Northener",
    source: ["SS", 0],
    plural: "Northeners",
    size: 3,
    speed: {
        walk: { spd: 30, enc: 20 },
    },
    languageProfs: [1, "Common"],
    improvements: "",
    scores: [1, 1, 1, 1, 1, 1],
    trait: "",
    toolProfs: [
        ["Any one tool", 1]
    ],
};

RaceList["riverfolk"] = {
    regExpSearch: /^(?=.*riverfolk).*$/i,
    name: "Riverfolk",
    sortname: "Human, Riverfolk",
    source: ["SS", 0],
    plural: "Riverfolk",
    size: 3,
    speed: {
        walk: { spd: 30, enc: 20 },
    },
    languageProfs: [1, ["Elvish or Dwarvish", 1], "Common"],
    improvements: "",
    scores: [0, 0, 0, 0, 0, 0],
    trait: "",
    scorestxt: "+2 to any ability score and +1 to any other",
    toolProfs: ["Vehicles (water)"],
};

RaceList["stormborn"] = {
    regExpSearch: /^(?=.*stormborn).*$/i,
    name: "Stormborn",
    sortname: "Human, Stormborn",
    source: ["SS", 0],
    plural: "Stormborns",
    size: 3,
    speed: {
        walk: { spd: 35, enc: 25 },
    },
    languageProfs: [1, "Common"],
    improvements: "",
    scores: [0, 0, 0, 0, 0, 0],
    trait: "",
    scorestxt: "+3 to Strength or Constitution. This can't put you past 17",
    skills: ["Survival"],
};


RaceList["flametouched"] = {
    regExpSearch: /^(?=.*flametouched).*$/i,
    name: "Flametouched dwarf",
    sortname: "Dwarf, Flametouched",
    source: ["SS", 0],
    plural: "Flametouched dwarves",
    size: 3,
    speed: {
        walk: { spd: 25, enc: 25 },
    },
    languageProfs: ["Ignan", ["Common, Elvish or Dwarvish", 1]],
    improvements: "",
    vision: [
        ["Darkvision", 60]
    ],
    trait: "Flametouched Dwarf (+2 Constitution, +1 Intelligence/Wisdom)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.",
    savetxt: { text: ["Adv. on saves vs. magic"] },
    weaponProfs: [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
    toolProfs: [
        ["Smith, brewer, or mason tools", 1]
    ],
    dmgres: ["Fire"],

    spellcastingBonus: {
        name: "Flametouched (level 1)",
        spells: ["produce flame"],
        selection: ["produce flame"],
        firstCol: 'atwill'
    },
    features: {
        "searing smite": {
            name: "Flametouched (level 3)",
            limfeaname: "Searing Smite",
            minlevel: 3,
            usages: 1,
            recovery: "long rest",
            spellcastingBonus: {
                name: "Flametouched (level 3)",
                spells: ["searing smite"],
                selection: ["searing smite"],
                firstCol: 'oncelr'
            }
        },
        "heat metal": {
            name: "Flametouched (level 5)",
            limfeaname: "Heat Metal",
            minlevel: 5,
            usages: 1,
            recovery: "long rest",
            spellcastingBonus: {
                name: "Flametouched (level 5)",
                spells: ["heat metal"],
                selection: ["heat metal"],
                firstCol: 'oncelr'
            }
        },

    }
};

AddRacialVariant("flametouched", "int", {
    regExpSearch: /intelligence/i,
    name: "Flametouched Dwarf (Intelligence)",
    trait: "Flametouched Dwarf (+2 Constitution, +1 Intelligence)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.",
    scores: [0, 0, 2, 1, 0, 0],
    spellcastingAbility: 4,
});

AddRacialVariant("flametouched", "wis", {
    regExpSearch: /wisdom/i,
    name: "Flametouched Dwarf (Wisdom)",
    trait: "Flametouched Dwarf (+2 Constitution, +1 Wisdom)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.",
    scores: [0, 0, 2, 0, 1, 0],
    spellcastingAbility: 5,
});



/*   


    

*/

// MAGIC ITEMS

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
    description: 'The staff has 25 charges, regaining 2d10 expended charges at dawn. If I use its last charge, roll a d20. On a 20, it regains 1d10+1 charges. Expend charges for use of spells or increase DC of spells I am specialized in by 2. Spells from my opposite school has -2 DC, can be removed by use of charges.',
    descriptionFull: 'The staff has 25 charges, regaining 2d10 expended charges at dawn. If I use its last charge, roll a d20. On a 20, it regains 1d10+1 charges. When attuning to it or at each long rest I can choose a school to specialize in. If I am a wizard with a spell school subclass that school is counted as a school you are specialized in in addition to the staffs choice. Depending on your choice you get an opposed school. Spells cast of the opposed school has a -2 penalty on spell save DC. If the selcted school is the oposite of my wizard specialization I do not have any opposed school. When casting a spell I can expend charges (1 per spell level minimum 1) to increase the DC by 2. This only works in my specialized schools or in the opposed school to offset the penalty. I gain bonus spells depending on my specialization.\n\nSchools:\nAbjuration - Necromancy\nConjuration - Transmutatio\nDivination - Illusion\nEnchantment - Evocation',
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
    "abjuration": staffOfTheSpecialistSpells('abjuration', classes.known),
    "conjuration": staffOfTheSpecialistSpells('conjuration', classes.known),
    "divination": staffOfTheSpecialistSpells('divination', classes.known),
    "enchantment": staffOfTheSpecialistSpells('enchantment', classes.known),
    "evocation": staffOfTheSpecialistSpells('evocation', classes.known),
    "illusion": staffOfTheSpecialistSpells('illusion', classes.known),
    "necromancy": staffOfTheSpecialistSpells('necromancy', classes.known),
    "transmutation": staffOfTheSpecialistSpells('transmutation', classes.known),
}

function staffOfTheSpecialistSpells(choice, classes) {
    var archetype = Object.keys(classes).indexOf('wizard') !== -1 ? classes.wizard.subclass : null;
    var spells = [];
    if (choice == 'abjuration' || archetype == 'wizard-abjuration') {
        spells = spells.concat({
            name: 'Abjuration',
            spells: ["mage armor", "lesser restoration", "protection from energy", "freedom of movement", "antilife shell"],
            selection: ["mage armor", "lesser restoration", "protection from energy", "freedom of movement", "antilife shell"],
            times: 5
        });
    }
    if (choice == 'conjuration' || archetype == 'wizard-conjuration') {
        spells = spells.concat({
            name: "Conjuration",
            spells: ["entangle", "web", "sleet storm", "grasping vine", "insect plague"],
            selection: ["entangle", "web", "sleet storm", "grasping vine", "insect plague"],
            times: 5
        });
    }
    if (choice == 'divination' || archetype == 'wizard-divination') {
        spells = spells.concat({
            name: "Divination",
            spells: ["comprehend languages", "find traps", "clairvoyance", "arcane eye", "commune with nature"],
            selection: ["comprehend languages", "find traps", "clairvoyance", "arcane eye", "commune with nature"],
            times: 5
        });
    }
    if (choice == 'enchantment' || archetype == 'wizard-enchantment') {
        spells = spells.concat({
            name: "Enchantment",
            spells: ["bless", "hold person", "enemies abound", "dominate beast", "modify memory"],
            selection: ["bless", "hold person", "enemies abound", "dominate beast", "modify memory"],
            times: 5
        });
    }
    if (choice == 'evocation' || archetype == 'wizard-evocation') {
        spells = spells.concat({
            name: "Evocation",
            spells: ["thunderwave", "darkness", "fireball", "otiluke's resilient sphere", "cone of cold"],
            selection: ["thunderwave", "darkness", "fireball", "otiluke's resilient sphere", "cone of cold"],
            times: 5
        });
    }
    if (choice == 'illusion' || archetype == 'wizard-illusion') {
        spells = spells.concat({
            name: "Illusion",
            spells: ["color spray", "nystul's magic aura", "phantom steed", "hallucinatory terrain", "mislead"],
            selection: ["color spray", "nystul's magic aura", "phantom steed", "hallucinatory terrain", "mislead"],
            times: 5
        });
    }
    if (choice == 'necromancy' || archetype == 'wizard-necromancy') {
        spells = spells.concat({
            name: "Necromancy",
            spells: ["ray of sickness", "gentle repose", "bestow curse", "blight", "contagion"],
            selection: ["ray of sickness", "gentle repose", "bestow curse", "blight", "contagion"],
            times: 5
        });
    }
    if (choice == 'transmutation' || archetype == 'wizard-transmutation') {
        spells = spells.concat({
            name: "Transmutation",
            spells: ["jump", "magic weapon", "haste", "giant insect", "skill empowerment"],
            selection: ["jump", "magic weapon", "haste", "giant insect", "skill empowerment"],
            times: 5
        });
    }
    return { spellcastingBonus: spells };
}