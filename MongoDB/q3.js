db.employees.find()
db.employees.find().skip(1)
db.employees.find().limit(1)
db.employees.find().skip(1).limit(1)
db.employees.find({department:"IT"})
db.employees.find({department:"IT"},{_id:0,Name:1})
db.employees.find({department:"IT"},{_id:0,Name:1,Salary:1})
db.employees.find(
    {Salary:{$gt:2000}},
    {_id:0,Name:1,Salary:1}
)
db.employees.find(
    {Salary:{$gte:2000}},
    {_id:0,Name:1,Salary:1}
)
db.employees.find(
    {Salary:{$lt:2000}},
    {_id:0,Name:1,Salary:1}
)

db.employees.find(
    {Salary:{$gte:2000},Department:"IT"},
    {_id:0,Name:1,Salary:1}
)
db.employees.find(
    {$or:[{Salary:{$gte:3000}},{Department:"IT"}]},
    {_id:0,Name:1,Salary:1}
)
db.employees.find(
    {$and:[{Salary:{$gte:2000},Department:"IT"}]},
    {_id:0,Name:1,Salary:1}
)

db.employees.find({Department:{$eq:"IT"}})
db.employees.find({Department:{$ne:"IT"}})

db.employees.find({department:{$in:["Admin","HR"]}})
db.employees.find({department:{$nin:["Admin","HR"]}})