function randomf()
{
    return Math.random();
}
console.log(randomf());

var randomNumber019 = Math.floor(Math.random() * 20);

function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum ());

function convertToInteger(str){
    return parseInt(str)
}

console.log(convertToInteger("56"));

function convertToInteger(str){
    return parseInt(str, 2)
}
convertToInteger("1001");