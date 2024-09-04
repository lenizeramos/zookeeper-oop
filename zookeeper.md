# Zookeeper - OOP

## Introduction:
let's create a program for a zoo management system - "Zookeeper" and  demonstrate the principles of abstraction, encapsulation, inheritance, polymorphism, composition, and aggregation. In our "Zookeeper" system, we will have an abstract class "Animal", and two derived classes "Lion" and "Elephant" which should inherit from "Animal" class. We will also have a "Zoo" class that uses composition/aggregation to manage a collection of animals(Note, animals should be the instances, not the "Animal" class itself). Finally, implement "makeSound" method to perform a concert.

## Step by Step Instruction:

Step 1: Define the Abstract Class "Animal".

```js

// Create an abstract class called "Animal" with name and species properties.
// Add an abstract method "makeSound" that will be implemented by derived classes.
class Animal {
    #name;
    #species;
    constructor(name, species) {
        // TODO: Add code here.
    }

  // TODO: Add the abstract method here.
}
```

Step 2: Create Derived Classes "Lion" and "Elephant".

```js
// Create two derived classes "Lion" and "Elephant" that inherit from the "Animal" class.
// Implement the "makeSound" method for each derived class.
class Lion extends Animal {
    constructor(name) {
        // TODO: Add code here.
    }

  // TODO: Implement the "makeSound" method here.
}

class Elephant extends Animal {
    constructor(name) {
        // TODO: Add code here.
    }

  // TODO: Implement the "makeSound" method here.
}

```

Step 3: Implement Composition and Aggregation in the "Zoo" Class

```js
// Create a class called "Zoo" that uses composition to manage a collection of animals.
// Add methods to add animals to the zoo and perform a concert with all animals.
class Zoo {
    constructor() {
        // TODO: Add code here to initialize the collection of animals.
    }

  // TODO: Add a method to add animals to the zoo.
  
  // TODO: Add a method to perform a concert with all animals.
}

```

Step 4: Create Instances of Animals and the Zoo

```js
// Create instances of animals (e.g., a lion and an elephant).
// Create an instance of the zoo and add animals to it.
const simba = new Lion("Simba");
const dumbo = new Elephant("Dumbo");

const myZoo = new Zoo();
// TODO: Add code here to add animals to the zoo.

```

Step 5: Implement the "makeSound" Method and Perform a Concert
```js
// Implement the "makeSound" method for each animal class to return the respective sounds.
// Implement the "performConcert" method in the zoo class to iterate through animals and make them perform.
// Print the sounds they make during the concert.
// TODO: Add code here.

```

## Discussion
After complete the zookeeper system, let's have some reviews and analyze on the understanding of the key OOP principles.

1. **Abstraction and Encapsulation**: How is abstraction achieved in "ZooKeeper" system and how are the properties and methods encapsulated within the `Animal` class?

2. **Inheritance**: Can you identify the base class and the derived classes in the code? How does inheritance help in reusing code and organizing related classes?

3. **Polymorphism**: Explain how polymorphism is demonstrated in this code. Which method is declared as abstract in the `Animal` class, and how do the derived classes implement it differently?

4. **Composition and Aggregation**: How is composition used in the `Zoo` class to manage a collection of animals? What is the difference between composition and aggregation in this context?

5. **Usage**: What instances of animals are created, and how are they added to the zoo? Can you describe the process of performing a concert with all the animals in the zoo?

## Example answers:


1. **Abstraction and Encapsulation**: Abstraction is achieved in the "ZooKeeper" system by creating the abstract class `Animal`. This class abstracts the concept of an animal, defining essential properties like `name` and `species`, as well as the abstract method `makeSound()`. Encapsulation is achieved by encapsulating these properties and methods within the `Animal` class, making them private to the class and only accessible through defined interfaces (getters and setters).

2. **Inheritance**: In the code, the base class is `Animal`, and the derived classes are `Lion` and `Elephant`. Inheritance helps in reusing code by allowing the derived classes to inherit the properties and methods of the base class. It also helps in organizing related classes by creating a hierarchy where common attributes and behaviors are defined in the base class, promoting code reusability and maintainability.

3. **Polymorphism**: Polymorphism is demonstrated in this code through the `makeSound()` method. In the `Animal` class, `makeSound()` is declared as an abstract method, indicating that it must be implemented by any concrete (derived) class. The derived classes, `Lion` and `Elephant`, implement this method differently, providing their unique sound representations ("Roar!" and "Trumpet!"). Polymorphism allows the `performConcert()` method in the `Zoo` class to call `makeSound()` on different animal objects, and the appropriate sound is produced based on the specific class instance.

4. **Composition and Aggregation**: Composition is used in the `Zoo` class to manage a collection of animals. The `Zoo` class has an array called `animals` that holds references to individual `Animal` objects. This is an example of composition because the `Zoo` class is composed of `Animal` objects. In this context, composition signifies that a `Zoo` is made up of individual animals. Aggregation, on the other hand, would imply that the `Zoo` class merely references animals without having ownership or responsibility for their lifecycle. In this code, the `Zoo` class composes a collection of animals.

5. **Usage**: In the code, two instances of animals are created: `simba` (a `Lion`) and `dumbo` (an `Elephant`). These animals are added to the `myZoo` instance using the `addAnimal()` method. To perform a concert with all the animals in the zoo, the `performConcert()` method of the `Zoo` class is called. This method iterates through the `animals` array, calling the `makeSound()` method for each animal. As a result, you'll see output indicating the sounds produced by each animal, creating a simulated concert experience.
