db.employees.updateOne(
    {email:"azam@gmail.com"},
    {$set:{salary:5000}}
)

db.employees.updateMany(
    {},
    {$set:{points:1}}
)
db.employees.updateMany(
    {department:"IT"},
    {$set:{points:1}}
)
db.employees.updateMany(
    {department:"IT"},
    {$set:{points:-1}}
)

//if emial is not exist then it will add new 
db.employees.updateOne(
    {email:"abc@gmail.com"},
    {$set:{name:"Krish",department:"HR",salary:2700}},
    {upsert:true}
)

db.employees.deleteOne({email:"abc@gmail.com"})
db.employees.deleteOne({department:"Admin"})

db.employees.find().sort({name:-1})

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)

db.employees.updateMany(
    {},
    {$unset:{score:""}}
)

db.employees.find({},{_id:0,name:1,location:1})

db.employees.updateMany(
    {},
    {$push:{points:5}}
)
db.employees.updateMany(
    {},
    {$push:{points:10}}
)
db.employees.updateMany(
    {department:"HR"},
    {$push:{points:20}}
)
db.employees.updateMany(
    {},
    {$pull:{points:3}}
)
db.employees.updateMany(
    {},
    {$addToSet:{location:"LA"}}
)

//last data will be remove 
db.employees.updateMany(
    {},
    {$pop:{location:1}}
)

//first data will remove
db.employees.updateMany(
    {},
    {$pop:{location:-1}}
)

