
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        // you can use this to access the variable inside the function
        console.log(`Sleeping now ${this.name}`);
    }
    activity() {
        // WE can call function inside function in class using 'this'
        this.sleep();
    }
}

const Shihab = new Person('Shihab Uddin Akand', 24);
console.log(Shihab);
Shihab.sleep();
const joe = new Person('Sleepy Joe', 98);
console.log(joe);
joe.activity();

// Complex
