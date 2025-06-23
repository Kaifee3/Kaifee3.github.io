//Array and methods.....
// const score=[2,1,7,5,3];
// score.forEach((value)=>{
//     console.log(value)
// })

// score.map((value)=>{
//     console.log(value)
// })

// const newScore= score.map((value)=>{
//     return value+5
// })
// console.log(newScore)

// const newScore= score.map((value)=>{
//     return value>5
// })
// console.log(newScore)

// const score=[2,1,7,5,3];
// const newScore= score.filter((value)=>{
//     return value>2
// })
// console.log(newScore)

// const score=[2,1,7,5,3];
// const newScore= score.find((value)=>{
//     return value>2
// })
// console.log(newScore)

// const score=[2,1,7,5,3];
// const newScore= score.reduce((sum,value)=>{
//     return sum+value
// },0)
// console.log(newScore)

const score=[2,1,7,5,3];
const newScore= score.reduce((sum,value)=>{
    return sum+value
},0)
console.log(newScore)