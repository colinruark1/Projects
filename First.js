var prompt = require('prompt');


function uniques(n) {
    let numLetters = 0;
    let numVowel = 0;
    for(i = 0; i < 26; i++) {
        if(n.includes(String.fromCharCode(i+65))) {
            numLetters++;
        }
    }
    return numLetters;
}

function totalVowels() {
    let numVowel = 0;
    for(j = 0; j < n.length; j++) {
        if(n.charAt(j) == "A")
        {
            numVowel++;
        }
        if(n.charAt(j) == "E")
        {
            numVowel++;
        }
        if(n.charAt(j) == "I")
        {
            numVowel++;
        }
        if(n.charAt(j) == "O")
        {
            numVowel++;
        }
        if(n.charAt(j) == "U")
        {
            numVowel++;
        }
    }
    return numVowel;
}

function numUppers(s) {
    let numLetters = 0;
    for(i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            numLetters++;
        }
    }
    return numLetters;
}

function frequent(n) {
    let highest = 0;
    let highestChar = "-";
    let amount;
    for(j = 0; j < 26; j++) {
        amount = 0;
        for(k = 0; k < n.length; k++) {
            if(n.charAt(k) == String.fromCharCode(j + 65)) {
                amount++;
            }
        }
        if(amount > highest) {
            highest = amount;
            highestChar = String.fromCharCode(j + 65);
        }
    }
    return highest;
}

function words(n, s) {
    let midWord = false;
    let beginnings = [];
    let lengths = [];
    let current = 0;
    let start = 0;
    let wordLen = 0;
    for(i = 0; i < s.length; i++) {
        if(midWord) {
            if(n.charCodeAt(i) > 64 && n.charCodeAt(i) < 91) {
                current++;
            }
            else {
                lengths.push(current);
                current = 0;
                midWord = false;
            }
        }
        else {
            if(n.charCodeAt(i) > 64 && n.charCodeAt(i) < 91) {
                midWord = true;
                beginnings.push(i);
                current++;
            }
        }
    }
    for(i = 0; i < beginnings.length; i++) {
        if(lengths[i] > wordLen) {
            start = beginnings[i];
            wordLen = lengths[i];
        }
    }
    return s.substring(start, start + wordLen);
}

let s = prompt("Please enter a string.");
let n = s.toUpperCase();

let numLetters = uniques(n);
console.log(numLetters);

let numVowel = totalVowels(n);
console.log(numVowel);

let uppers = numUppers(s);
console.log(uppers);

let mostPop = frequent(n);
console.log(mostPop);

let biggestWord = words(n, s);
console.log(biggestWord);

