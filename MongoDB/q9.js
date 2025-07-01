db.employees.find({name:{$regex:"a"}})
db.employees.find({name:{$regex:"cathy",$options:"i"}})
db.employees.find({name:{$regex:"^c",$options:"i"}}) //name starts with the c
db.employees.find({name:{$regex:"y$",$options:"i"}}) //name ends with the y