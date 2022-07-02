/*  -WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.

    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
    Subject:    Class
    Effect:     This script adds a class called the "Broken Cleric".

    Code by:    Mezz
    Date:       2022-04-25 (sheet v12.999)
*/

var iFileName = "Broken Cleric [mezz].js";
RequiredSheetVersion(12.999);

SourceList["SADAL"] = {
    name: "Broken Cleric (v1.1.1)",
    abbreviation: "SS",
    group: "Sadal Supplements",
    url: "dndwiki.fivefactorial.se",
    date: "2022/04/25"
};

ClassList["brokenCleric"] = {
    regExpSearch: /broken cleric/i,
    name: "Broken Cleric",
    source: ["SS", 0],
    spellcastingFactor: 1,
    primaryAbility: "\n \u2022 Broken Cleric: Strength;",
    prereqs: "\n \u2022 Broken Cleric: Lost your god;",
    improvements: levels.map(function(n) {
        return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
    }),
    die: 8,
    saves: ["Wis", "Cha"],
    skills: ["\n\n" + toUni("Broken Cleric") + ": Choose two from History, Insight, Medicine, Persuasion, Religion."],
    armor: [
        [true, true, false, true],
        [true, true, false, true]
    ],
    weapons: [
        [true, false, ["You do NOT have proficiency in Quarterstaffs"]]
    ],
    equipment: "The Broken Cleric starts with nothing but remorse.",
    subclasses: ["Lost Domain", ["broken-cleric-arcana"]],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features: {
        "lost patron": {
            name: "Lost Patron",
            minlevel: 1,
            description: desc([
                "By ways beyond your understanding, you have lost your connection to your diety. All domain spells granted by your god no longer count as known to you, irregardless of the class that grants it to you."
            ])
        }
    }
};

ClassSubList["broken-cleric-arcana"] = {
    regExpSearch: /arcana domain/i,
    subname: "Arcana Domain",
    features: {
        "subclassfeature1": {
            name: "Forgotten Knowledge",
            minlevel: 1,
            description: "\n   " + "Unbeknownst to you, you gain proficiency with Arcana",
            skills: ["Arcana"],
            skillstxt: "\n\n" + toUni("Arcane Domain") + ": Arcana.",
        },
    }
};