"use strict";
exports.__esModule = true;
var split_file_1 = require("split-file");
const fs = require('fs');

var files = fs.readdirSync('./');
//console.log(files);

try {
    var newFiles = [];

    files.forEach(element => {
        //console.log(element);
        var s = element.split('.sf-');
        const l = s.length;
        //console.log(s);
        const m =s.at(l-1);
        //console.log(m);
        
        if (m.startsWith('part')) {
            newFiles.push(element);
        }
    });
    const firstElement = newFiles.at(0);
    const splitElement = firstElement.split('.');
    const format = splitElement.at(splitElement.length-2);
    const name = splitElement.at(0);
    console.log(format);
    console.log(name);
    split_file_1.mergeFiles(newFiles, name + '.' + format);
    //split_file_1.mergeFiles(newFiles, name + '.' + format);
    //console.log(newFiles);
} catch (err) {
  console.error(err);
}