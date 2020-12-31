var convert = require('xml-js');
var xml =
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Work</todo>' +
'    <todo>Play</todo>' +
'</note>';

const fs = require('fs');

const xmlFile = fs.readFileSync('ItemData.xml')


var result2 = convert.xml2json(xmlFile, {compact: false, spaces: 4});
console.log(result2);