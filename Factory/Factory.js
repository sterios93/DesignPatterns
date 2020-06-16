// Factory
// - A factory method is a static method that creates objects
// - A Factory is any entity that can take care of object creation
// - Principle of separation of concerns, if the factory methods, are declaring some other functionality, maybe it's better to move them in a separate class
// - Abstract Factory - Hierarchies of factories can be used to create related objects


// Exercise

// You are given a class called Person. The person has two fields id , name
// Please implement a PersonFactory that has a non-static createPerson() method
// that takes a person's name and returns a person initialized with this name and id.
// The id of the person should be set as 0-based index of the object any isntance of PersonFactory has created.
// So the first person any factory makes should have id=0, second id=1 and so on.

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    constructor(){
        this.id = 0;
    }
    createPerson(name) {
        return new Person(
            this.id++,
            name
        );
    }
}

let pf = new PersonFactory();
let p1 = pf.createPerson('Chris');
let p2 = pf.createPerson('s');
console.log(p1);
console.log(p2);