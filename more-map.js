const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

// five bonus
const fiveBonus = numbers.map(n => n + 5);
console.log(fiveBonus);

const friends = ['Tom', 'dom', 'Shihab', 'Munther', 'shakil'];
const length = friends.map(l => l.length);
console.log(length);
const firstLetter = friends.map(letter => letter[0]);
console.log(firstLetter);