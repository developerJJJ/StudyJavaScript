function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("foxtrot"));
 
var myObj = {
    gift: "pony",
    pet: "kitten"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("hello "))

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);