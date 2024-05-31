// Ans:No:01
const OddArray = [1, 3, 5, 7, 9];
function Even(num) {

    return num + 1;
}
const EvenArray = OddArray.map(Even)
console.log(EvenArray);

// Ans No 02

const numbers = [33, 50, 79, 78, 90, 101, 30];

const result = numbers.filter(p => p % 10 === 0);
console.log(result);
// Ans : No : 03

const result2 = numbers.find(p => p % 10 === 0);
console.log(result2);