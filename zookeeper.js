// Create an abstract class called "Animal" with name and species properties.
// Add an abstract method "makeSound" that will be implemented by derived classes.
class Animal {
  constructor(name, species) {
    if (this.constructor.name === "Animal") {
      throw new Error("Class is of abstract type and can't be instantiated");
    }
    this.name = name;
    this.species = species;
  }
  makeSound() {
    throw new Error("makeSound method must be implemented");
  }
}

// Create two derived classes "Lion" and "Elephant" that inherit from the "Animal" class.
// Implement the "makeSound" method for each derived class.
class Lion extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Roar";
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Pawoo";
  }
}

// Create a class called "Zoo" that uses composition to manage a collection of animals.
// Add methods to add animals to the zoo and perform a concert with all animals.
class Zoo {
  constructor() {
    // TODO: Add code here to initialize the collection of animals.
    this.animals = [];
  }
  // TODO: Add a method to add animals to the zoo.
  addAnimal(animal) {
    this.animals.push(animal);
  }
  // TODO: Add a method to perform a concert with all animals.
  performConcert() {
    this.animals.forEach((animal) => {
      console.log(animal.makeSound());
    });
  }
}

// Create instances of animals (e.g., a lion and an elephant).
// Create an instance of the zoo and add animals to it.
const simba = new Lion("Simba");
const dumbo = new Elephant("Dumbo");
const myZoo = new Zoo();

// TODO: Add code here to add animals to the zoo.

myZoo.addAnimal(simba);
myZoo.addAnimal(dumbo);
myZoo.performConcert();

// Implement the "makeSound" method for each animal class to return the respective sounds.
// Implement the "performConcert" method in the zoo class to iterate through animals and make them perform.
// Print the sounds they make during the concert.
