function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2]));
const cube = x => x * x * x;
console.log(cube(2))
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);
const nums = [1, 2, 3, 4, 5];
// below if n%2 does return something other than 0 then it will be stored in output. Its a bit tricky
let output = nums.filter(n => n % 2);
console.log(output);

const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, disk: '512SSD' };
const { price } = product;

console.log('Price of the product:', price);
