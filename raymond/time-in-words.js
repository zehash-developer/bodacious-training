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
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    let time = ["zero","one","two","three","four","five",
                "six","seven","eight","nine","ten",
                "eleven","twelve","thirteen","fourteen","quarter",
                "sixteen","seventeen","eighteen",
                "nineteen","twenty","twenty one", "twenty two", "twenty three", "twenty four",
                "twenty five","twenty six","twenty seven","twenty eight","twenty nine", "half"];
    if(m == 0)
    {
        return time[h] + " o' clock";
    }
    if(m == 15 || m == 30)
    {
        return time[m] + " past " + time[h];
    }
    if(m == 45)
    {
        return time[60-m] + " to " + time[h+1];
    }
    if(m == 1)
    {
        return time[m] + " minute past " + time[h];
    }
    if(m < 30)
    {
        return time[m] + " minutes past " + time[h];
    }
    if(m > 30)
    {
        return time[60-m] + " minutes to " + time[h+1];
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    const result = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}
