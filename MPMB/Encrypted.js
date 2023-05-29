if (sheetVersion < 12001000) { throw "This script was made for a newer version of the sheet. Please use the latest version and try again.\nYou can get the latest version over at www.flapkan.com."; };
var iFileName = "Sadal Supplements DM.js";
RequiredSheetVersion("13.1.0");

SourceList["SS"] = {
    name: "Sadal Supplements",
    abbreviation: "SS",
    group: "Sadal Supplements",
    campaignSetting: "Sadal",
    date: "2022/07/29"
};


// This example was made to show that you can add encrypted materials to the sheet. This may be useful if the DM want to publish their scripts in a public location and still not tipping the players of to what is to come.
// The encryption method was found on https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption
//
// Currently this example only adds an exapmle item if the passfrase 'A' is added as the encryption key.
// MagicItemsList['itemofexample'] = { name: 'Item of Example', source: ['SS', 0], type: 'example', rarity: 'common', description: 'This is just an example.', weight: 0, attunement: false, }
//
// To encrypt your code. Put it in a string and pass it into the ciphe => cipher(KEY)(CODE).

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

var salt = app.response("Please enter the passfrase for the encrypted material", "Encrypted material");
try {
    eval(decipher(salt)('0c202628220835242c320d2832351a662835242c2e272439202c312d24661c617c613a612f202c247b61660835242c612e27610439202c312d24666d61322e343322247b611a661212666d61711c6d61353831247b61662439202c312d24666d613320332835387b6166222e2c2c2e2f666d612524322233283135282e2f7b616615292832612832612b34323561202f612439202c312d246f666d613624282629357b61716d61203535342f242c242f357b6127202d32246d613c'));
} catch (ex) {
    throw 'You entered the wrong passfrase. Try to add the script again to retry.';
}