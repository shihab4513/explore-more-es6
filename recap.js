/*
1.var-let constant
2.default parameter
3.template string
4.arrow function
5.destructuring
6.spreading operator
7.object.keys,object.values,object.entries
8.for of loop used in array and string
9.for in loop used in object

*/
if (true) {
}

const { age, z, ...others } = { x: 2, y: 5, z: 3, name: "shihab", age: 24 };
console.log(z);

const [first, second, ...remaining] = ["ram", "sam", "jodu", "modhu"];
console.log(remaining);
