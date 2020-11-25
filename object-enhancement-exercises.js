//Same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
};

//Computed Property Names ES2015
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}


//createAnimal function
const animal = {
    species,
    verb,
    noise

}
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}