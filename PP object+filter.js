const instructor = [
    { name: "Nodi", age: 28, position: "Senior" },
    { name: "Akil", age: 26, position: "Junior" },
    { name: "Shobuj", age: 30, position: "Senior" }
];

const selected = instructor.filter(p => p.position === 'Senior');
const selectedsName = selected.map(p => p.name);
console.log(selectedsName);