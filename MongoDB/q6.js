db.employees.find(
    {salary:{$gt:3000}},
    {_id:0,name:1}
).limit(2).skip(1)


db.employees.find(
    {salary:{$gt:3000},department:"IT"},
    {_id:0,name:1}
)

db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}}
])

//it will dispay tha same name in different line 
db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"}
])
db.employees.updateMany(
    {},
    {$addToSet:{location:"AL"}}
)


db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}
}}
])

db.employees.aggregate(
    [
        {$group:{
            _id:null,
            total:{$sum:"$salary"}
        }}
    ]
)

db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.oredrValue":1}},
    {$match:{salary:{$gt:2000}}}
])

db.country.insertOne(
    {
        empId:ObjectId("685bca4556a2304bf2748a65"),
        country:"US"
    }
)
db.country.insertOne(
    {
        empId:ObjectId("685bca4556a2304bf2748a62"),
        country:"UK"
    }
)
db.country.insertOne(
    {
        empId:ObjectId("685bca4556a2304bf2748a63"),
        country:"Japan"
    }
)
db.country.insertOne(
    {
        empId:ObjectId("685bca3556a2304bf2748a61"),
        country:"India"
    }
)
db.orders.insertOne(
    {
        empId:ObjectId("685bca4556a2304bf2748a62"),
        oredrValue:5000
    }
)
db.orders.insertOne(
    {
        empId:ObjectId("685bca4556a2304bf2748a63"),
        oredrValue:5000
    }
)



db.employees.aggregate([
    {$lookup:{
        from:"country",
        localField:"_id",
        foreignField:"empId",
        as:"country"
    }}
])

db.employees.aggregate([
  {
    $lookup: {
      from: "country",
      localField: "_id",
      foreignField: "empId",
      as: "country"
    }
  },
  { $unwind: "$country" },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    }
  },
  { $unwind: { path: "$orders", preserveNullAndEmptyArrays: true } },
  {
    $project: {
      name: 1,
      salary: 1,
      country: "$country.country",
      oredrValue: "$orders.oredrValue" 
    }
  }
]);


db.employees.createIndex({"email":1})
db.employees.getIndexs()
db.employees.dropIndexes("email_1")
db.employees.find({email:"cathy@gmail.com"}).explain("executionStats")