function add(a,b){
    return a+b
}

export default add

db.users.updateOne(
  { email: "kaifiazam16@gmail.com" }, 
  { $set: { role: "admin" } } 
)
