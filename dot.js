const Person = {
    name: 'Shihab akand',
    job: 'Peanut Seller',
    '..33': 'XO'
}
console.log(Person.job);
// We can do above printing in different way .Below an example is given
console.log(Person['job']);
// Another way shown below 
const prop = 'job';
console.log(Person[prop]);
// Above all do the same thing
// Dot is easy is to use but we sometime can use dot properties. for example for '..33' we cant use dot we have to use bracket. Below such an example given 
console.log(Person["..33"]);
