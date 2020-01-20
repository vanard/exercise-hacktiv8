// 1. Let's Form a Sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + second + third + fourth + fifth + sixth + seventh);

// 2. Index Accessing - 1 by 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
for (let index = 4; index < 15; index++) {
    secondWord = secondWord + word[index];
}
var secondWord = ""; // do your own!
var thirdWord = ""; // do your own!
var fourthWord = ""; // do your own!
var fifthWord = ""; // do your own!

for (let index = 4; index < 15; index++) {
    secondWord = secondWord + word[index];
}

for (let index = 15; index < 17; index++) {
    thirdWord = thirdWord + word[index];
}

for (let index = 18; index < 20; index++) {
    fourthWord = fourthWord + word[index];
}

for (let index = 21; index < 25; index++) {
    fifthWord = fifthWord + word[index];
}

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);