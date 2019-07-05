function printManyTimes(str){
    "use strict";

    var SENTENCE = str + " is cool!";
    SENTENCE = str + " is amazing!"

    for(var i=0; i<str.length; i+=2){
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

const s = [5,7,2];
function editInPlace(){
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);