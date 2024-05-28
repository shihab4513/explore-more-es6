
const products = [
    {
        id: 1,
        name: 'Lenovo',
        price: 65000
    },
    {
        id: 2,
        name: 'Dell',
        price: 45000
    },
    {
        id: 3,
        name: 'HP',
        price: 40000
    },
    {
        id: 4,
        name: 'MacBook',
        price: 150000
    }

];
// WE  want to find all products name using map
const allName = products.map(p => p.name);
console.log(allName);
// If you want price
const allPrice = products.map(p => p.price);
console.log(allPrice);
// If you want to just show products using forEach
const result = products.forEach(p => console.log(p.id));
// WE want to show the products which price is greater than 50k using filter
const fiftyKgreaterProduct = products.filter(p => p.price > 50000);
console.log(fiftyKgreaterProduct);
// WE want to find the product that have less than 50k price using find()
const cheap = products.find(p => p.price < 50000);
console.log(cheap);
// If we want to sum all products price using reduce()


const total = products.reduce((prev, post) => prev + post.price, 0);
console.log(`total price: ${total}k`);










