// Now print Secondary location
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        {
                            schoolName: "Primary school"
                        },
                        {
                            location: "Petersberg"
                        }
                    ]
            },
            {
                secondary: [
                    { schoolName: "Secondary School" },
                    {
                        location: `DACCA`,
                        phone: `+880163265589`

                    }
                ]
            }

        ]
    }
}

console.log(data.Sophia.study[1].secondary[1].location);
console.log(data.Sophia.study[1].secondary[1].phone);