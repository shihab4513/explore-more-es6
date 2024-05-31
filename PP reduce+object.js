
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchoritra', age: 22 }
];

const total = people.reduce((prev, current) => prev + current.age, 0);
console.log(total);