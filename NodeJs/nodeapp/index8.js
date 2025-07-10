import bcrypt from 'bcrypt'
// const pwd="pass12345"
// const hashedpwd= await bcrypt.hash(pwd,10)
// console.log(hashedpwd);

const check = await bcrypt.compare("pass12345","$2b$10$Ggp7pdI0E5mQ95zhfUfK2eodnXybXKJ793DwrWnIz4YsBfukucNGK")
console.log(check)