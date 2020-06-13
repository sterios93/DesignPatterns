// Builder pattern
// Separate component that helps you build a components/objects

// Builder Facets pattern - you can use several builders interacting with each other
// Fluent interface explicitly returning the this, so you can chain methods

// Coding Exercise

// Sample use of the builder you are asked to create:


// The expected output of the above code is:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// Plase observe the same placement of spaces and indentation

class CodeBuilder {
  constructor(className) {
      this._class = new Class(className); // The CodeBulder class acts as a controller of the Class
  }

  addField(name) {
      this._class.fields.push(new Field(name));
      return this;
  }

  toString() {
      return this._class.toString();
  }
}

class Field {
    constructor(name) {
        this.name = name;
    }
}

class Class {
  constructor(name) {
      this.name = name;
      this.fields = [];
  }
   // TODO:: I don't like the example of the course, thing of different(better) example
   // Nobody is going to buld code like that.
  toString() {
    let result = [];
    result.push(`class ${this.name} {\n`);
    result.push(`  constructor(`);

    for (let i = 0; i < this.fields.length; ++i) {
      const field = this.fields[i];
      const hasNext = i + 1 !== this.fields.length;
      result.push(field.name);
      hasNext && result.push(', ');
    }

    result.push(`) {\n`);

    for (let field of this.fields) {
      result.push(`    this.${field.name} = ${field.name};\n`);
    }
    result.push('  }\n');

    result.push('}');
    return result.join('');
    }
}


let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());


// Summary
// - A builder is a separate component for building an object
// - Can either give builder an initializer or return it via a static funtion
// - To make bulder fluent, return self (chai methods)
// - Different facets(aspects) of an object can be buld with different builders working
//   in tandem bia a base class