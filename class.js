
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
// Class is used to maintain Similarity

class product {
    country = 'Bangladesh';


    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // We can use function inside class . Below an example given
    speak(talk) {
        console.log(`talking about ${talk} `);
    }
}
const lenovo = new product('le le lenovo', 45000);
console.log(lenovo);

lenovo.speak('Habuguju');

class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    lecture() {
        console.log('Sir is teaching Math');
    }

}

const Shihab = new Teacher('Shihab Uddin Akand', 'DSA');
const Rishad = new Teacher('Rishad', 'English');
console.log(Shihab);
console.log(Rishad);

Shihab.lecture();













