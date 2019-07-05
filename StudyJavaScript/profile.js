var contacts = [
    {
        "firstName": "a",
        "lastName": "lanwe",
        "number": "4t53453",
        "likes": ["paise", "cose","dbro"]
    },
    {
        "firstName": "Harry",
        "lastName": "Poett",
        "number": "12432423",
        "likes": ["asdf", "qwe","zxvc"]
    },
    {
        "firstName": "Sherwae",
        "lastName": "homel",
        "number": "982374",
        "likes": ["Inawef", "vilawe"]
    }
];

function lookUpProfile(name, prop){
    for (var i=0; i<contacts.length; i++){
        if(contacts[i].firstName === name){
            //return contacts[i][prop] || "No such property";
            if(contacts[i][prop])
                return contacts[i][prop]
            else
                return "No such property"
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Sherwae", "firstName");
console.log(data);