if (sheetVersion < 12001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Ressurected.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements",
    abbreviation: "SS",
    group: "Sadal Supplements",
    campaignSetting: "Sadal",
    date: "2022/07/31"
};

// Feats

FeatsList["second chance wrong race starter"] = {
    name: "Second Chance (Wrong Race) (Started Feet)",
    source: ["X", 75],
    prerequisite: "Not being a Halfling",
    prereqeval: function(v) { return CurrentRace.known.indexOf('halfling') === -1; },
    descriptionFull: "You are the wrong race for this feet. This is a starter feet, no ability scores given.",
    description: "You are the wrong race for this feet. This is a starter feet, no ability scores given.",
};
FeatsList["squat nimbleness wrong race"] = {
    name: "Squat Nimbleness (Wrong Race)",
    source: ["X", 75],
    prerequisite: "Not being a Dwarf or a small race",
    prereqeval: function(v) { return !((/dwarf/i).test(CurrentRace.known) || tDoc.getField('Size Category').currentValueIndices === 4); },
    descriptionFull: "You are not the proper race to benefit from this feet. You still gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.",
    description: "You are the wrong race for this feet. [+1 Strength or Dexterity]",
    scorestxt: "+1 Strength or Dexterity"
};