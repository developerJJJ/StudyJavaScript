function testStrict(val){
    if (val == 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict('7'));

function testNotEqual(val){
    if (val != 99){
        return "Not Equal"
    }
    return "Equal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val){
    if (val !== 17){
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

function testGreaterThan(val)