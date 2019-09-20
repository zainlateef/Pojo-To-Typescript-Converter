var fs = require('fs');
var modifiers, types, 

initializeKeywords();
var textToConvert = fs.readFileSync('target.txt', 'utf8');
var linesOfText = textToConvert.split('\n');
linesOfText = filterLines(linesOfText);
linesOfText.forEach( line => {

})


function initializeKeywords(){
    Map map = new Map();
    map.set("")
}

function filterLines(lines){
    lines.forEach(line => {line = line.replace((/  |\r\n|\n|\r/gm),"");})//remove tabs and newlines
    return lines.filter(line => {
        return line[0] != '@';
    })
}