const createPerson = (name, age, gender) =>{
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("JJJ", 56, "m"));

const bicycle = {
    gear: 2,
    setGear: function(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

