import express from 'express';

const app = express();

// app.get("/", (req, res) => {
//     res.send("Good morning");
// });
// app.get("/user", (req, res) => {
//     res.send("Hello user");
// });
// app.get("/ab*cd", (req, res) => {
//     res.send("Hello world");
// });

// app.get("/product",(req,res)=>{
//     res.status(201).json({name:"Product1",price:45})
// })

const products=[
        {id: 1,name:"product1",price:50},
        {id: 2,name:"product2",price:40},
        {id: 3,name:"product3",price:60},
    ];
app.get("/products",(req,res)=>{

    res.json(products)
})

app.get("/products/:id",(req,res)=>{
    const pid=req.params.id;
    res.json(products.find(pid));
})

// app.get("/student/:name",(req,res)=>{
//     res.send("Student name "+req.params.name);
// })
// app.get("/student/:name/age/:age",(req,res)=>{
//     res.send(req.params.name +" "+ req.params.age);
// })

// app.get("/name",(req,res)=>{
//     res.send("Hello");
// })


// app.get("/",(req,res)=>{
//     res.send(req.query)
// })

app.listen(8080, () => {
    console.log("Server started on port 8080");
});


