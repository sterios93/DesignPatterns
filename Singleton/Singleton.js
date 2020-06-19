// Singleton Design Pattern
// Motivation - For some components it only makes sense to have one in the system
// - Database repository
// - Object factory
// - Constructor call may be expensive
// - we want initialization to only happen once
// - We provide everyone with the same instance
// Want to prevent anyone creating additional copies
// Singleton - a component which is instantiated only once

// Implementation
class Singleton {
    constructor() {
        if (this.constructor.instance) return this;
        this.constructor.instance = this;
    }
}
// Monostate
class Monostate {
    get name() {return Monostate._name}
    set name(value) { Monostate._name = value}
}

Monostate._name = undefined;

let m = new Monostate();
m.name = 'pesho';

let m2 = new Monostate();
m.name = 'pesho2';

// Singleton problems
// Summary
// A constructor can choose what to return; we can keep returning same instance
// Monostate : many instances, shared data
// Directly depending on the Singleton is a bad idea; introduce a dependency instead
