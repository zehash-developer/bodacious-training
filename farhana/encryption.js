'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    //remove spaces from string
    s = Array.from(s.replace(/\s/g, ''));
    
    //square root to get upper and lower bounds
    const root = Math.sqrt(s.length)
    const lower = Math.floor(root);
    const upper = Math.ceil(root);
    
    //change input string into 2d array
    const newArr = [];
    while(s.length) {
        newArr.push(s.splice(0,upper));
    }
    
    //extract each column & print in a single line 
    let extractColumn = (arr, column) => arr.map(x => x[column]);
    let enc = "";
    for (let i = 0; i < upper; i++) {
        enc += extractColumn(newArr, i).toString().replace(/,/g, '') + " ";
    }
    
    return enc;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
