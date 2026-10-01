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

// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce()
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------
