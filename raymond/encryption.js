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
    let string = s.replace(/\s/g, ''); // String with no spaces
    let length = string.length; // Length of springs
    let squareRoot = Math.sqrt(length);
    let col = Math.ceil(squareRoot);
    let row = Math.floor(squareRoot);
    if(row * col < length) // row * col should be higher than length
    {
        row = Math.ceil(squareRoot);
    }
    var encryption = "";
    for(let i = 0; i < col; i++)
    {
        let jump = 0;
        while(i + jump < length)
        {
            encryption = encryption + string[i + jump];
            jump = jump + col;
        }
        encryption = encryption + " ";
    }
    return encryption;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
