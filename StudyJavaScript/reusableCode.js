function ourReusableFunction(){
    console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction(){
    console.log("Hi world");
}

reusableFunction();

function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10, 5)

var myGloable = 10;

function fun1(){
    oopsGlobal = 5; 

}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    typeof myGlobal
    if (typeof oopsGlobal != "undefined"){
        output += "myGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
// console.log(myVar);  error

var outerWear = "T-Shirt";

function myOutfit(){
    return outerWear = "sweater";
}
console.log(myOutfit());

var sum = 0;
function addThree(){
    sum += 3;
}

function addFive(){
    sum += 5;
}

var changed = 0;

function change(num) {
    return (num+5)/3;
}
changed = change(10);

var processed = 0;
function processArg(num){
    return (num+3)/5;
}

processed = processArgs=(7); 