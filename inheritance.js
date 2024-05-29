/*
Inheritance is suppose you want to create a class and that class needs all element of another class .You dont need to write it again in that class you can just extend
that class .Below such an example given.
*/

class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log(`Car is not not moving ,Car is not moving at all`);
    }
}

// Here come the inheritance part

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;


    }

}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;

    }
}

const shakire = new Bus('Shakura', 250000, 'A', 550);
console.log(shakire);

const GreenLoad = new Truck('Pound_Load', 500000000000, `100 TON`);
console.log(GreenLoad);
