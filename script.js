const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Instructions for every task are in README.md.
// Write your code below each heading,
// Be sure to add your own comments to the code you are writing

// ---------------------------------------------------------------------------
// Task 1 — Animal names with .map()
// ---------------------------------------------------------------------------
const animalNames = animals.map((animal) => animal.name);
console.log(animalNames);
// ---------------------------------------------------------------------------
// Task 2 — Log each animal with .forEach()
// ---------------------------------------------------------------------------

 // I use forEach to go through every animal
 // and display its name and species in the console.
animals.forEach((animal) => {
    console.log(`Name: ${animal.name} Species: ${animal.species}`);
});

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
// ---------------------------------------------------------------------------

 // This loop goes through every animal and shows
 // its age and whether it has been adopted.
 // Unlike forEach, for...of lets me stop the loop
 // early with break if I need to.
for (const animal of animals) {
    console.log(`Age: ${animal.age} Adopted: ${animal.adopted}`);
}

// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
// ---------------------------------------------------------------------------

// Separate animals based on whether they have been adopted.
const adoptedAnimals = animals.filter((animal) => animal.adopted);
const availableAnimals = animals.filter((animal) => !animal.adopted);

console.log(adoptedAnimals);
console.log(availableAnimals);

// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
// ---------------------------------------------------------------------------

// Find dogs that haven't been adopted yet.
// First I filter the animals, then I use map
// to get just their names instead of the whole object.
const availableDogs = animals
    .filter((animal) => animal.species === "dog" && !animal.adopted)
    .map((animal) => animal.name);

console.log(availableDogs);

// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce()
// ---------------------------------------------------------------------------

// I use reduce to add all the animal ages together.
// Then I divide the total by the number of animals
// to find the average age of the shelter animals.

const totalAge = animals.reduce((total, animal) => {
    return total + animal.age;
}, 0);

const averageAge = totalAge / animals.length;

console.log(averageAge);

// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------

// These functions let me reuse the same checks
// in later tasks instead of writing them again.

// Check whether an animal is a cat.
function isCat(animal) {
    return animal.species === "cat";
}

// Check whether an animal has been adopted.
function isAdopted(animal) {
    return animal.adopted === true;
}

// Get just the name of an animal.
function getName(animal) {
    return animal.name;
}

// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------

// First I find all the cats, then I check which
// ones were adopted. Finally, I get just their names.
// I reuse my functions from Task 7 instead of
// writing new callbacks.

const adoptedCats = animals
    .filter(isCat)
    .filter(isAdopted)
    .map(getName);

console.log(adoptedCats);

// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------

// This function creates a checker for a specific species.
// The returned function remembers which species I chose,
// so I can reuse it to check different animals.

function makeSpeciesChecker(species) {
    return function (animal) {
        return animal.species === species;
    };
}

// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------

// I use my species checker to create separate
// functions for dogs and rabbits.
// Then I filter the animals and reuse getName
// to display only the names of each species.

const isDog = makeSpeciesChecker("dog");
const isRabbit = makeSpeciesChecker("rabbit");

const dogNames = animals.filter(isDog).map(getName);
const rabbitNames = animals.filter(isRabbit).map(getName);

console.log(dogNames);
console.log(rabbitNames);
