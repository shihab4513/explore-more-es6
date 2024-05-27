// data access
const data = [
  {
    id: 1,
    name: "Shihab Uddin",
    address: "Demra",
  },
];
console.log(data[0].address);
const products = {
  count: 5000,
  data: [
    {
      id: 1,
      name: "lenovo laptop",
      price: 65000,
    },
    {
      id: 2,
      name: "macbook laptop",
      price: 165000,
    },
  ],
};
//second product price
console.log(products.data[1].name);

const user = {
  id: 5001,
  name: "Shihab akand",
  address: {
    street: {
      first: "154/1, Demra",
      second: "Chittagong road",
      third: "Cumilla",
    },
  },
};
console.log(user.address.street.second);
/*
console.log(user2.address.street?.second);
above lines 'street?' means if 'street' properties not found then no need to go further. It will print undefined.
*/
const user2 = {
  id: 5002,
  address: {
    name: "pori bibir majar",
    country: "Bangladesh",
  },
};
console.log(user2.address.street?.second);
