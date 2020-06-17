// Motivation
// - Complicated objects aren't designed from scratch
// - They reiterate existing designs
// - An existing (partially or fully constructed) design is a Prototype
// We make a copy ( clone ) the prototype and customize it
// - requires deep copy support
// We make the clonning convenient (e.g via a Factory)

// PROTOYPE - A partially or fully initialized obejct that you copy (clone) and make use of

// EXPLICITY COPYING -return new class for every copied class
// Copy through serialization - idea is instead of using deep copy we can seriazlie to some format
// and then parse that format
// - go trough every object property and copy it recursivly, if its a an another object call the same method again
// you need to save the object/class type, for later deseriliazation

// Ptototype Factory

// Summary 
// - To implmenet a prototype, particially constrcut an object and store it somewhere
// - deep copy the prototype
// - customize the resulting instance
// - A factory provides a convenient API for using prototypes


// Given the definitions shown in code, you are asked to implement Line.deepCopy()
// to perform a deep copy of the given Line object. This method should return a copy of a Line
// that contains copies of its start/end points


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    deepCopy() {
        const start = new Point(this.start.x, this.start.y);
        const end = new Point(this.start.x, this.start.y);
        return new Line(start, end);
    }
}