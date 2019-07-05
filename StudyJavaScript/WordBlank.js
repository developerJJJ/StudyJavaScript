function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];

var myArray = ["Quincy", 1];

var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["BUlls", 23], ["White Sox", 45]];
console.log(myArray[0][1])

var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [50, 60, 70];
var myData = myArray[1];
console.log(myData)

var ourArray = [18, 64, 99];
ourArray[1] = 45;

var myArray = [18, 64, 99];

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[0][0];

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray)

var myList = [["cereal", 3], ["milt", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];