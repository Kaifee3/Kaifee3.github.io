db.employees.insertOne({
    name:"Johan Smith",
    email:"johan@gmail.com",
    department:"IT",
    salary:25000,
    location:["FL","OH"],
    date:Date()
});

//it will show the inserted data..
db.employees.find()

//show collection

// db.employees.insertMany([
//     {Name:"Vansh",age:21},
//     {Name:"Avinash",age:22},
// ])

db.employees.insertMany([
    {
        name:"Mike Joseph",
        email:"mike@gmail.com",
        department:"IT",
        salary:2456,
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Any",
        email:"any@gmail.com",
        department:"HR",
        salary:1856,
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Azam",
        email:"azam@gmail.com",
        department:"Admin",
        salary:4456,
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"IT",
        salary:3456,
        location:["FL","TX"],
        date:Date()
    },
]);

