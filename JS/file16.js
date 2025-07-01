//Promises...
// function f1(){
//     // setTimeout(()=>{
//     //     return 5;
//     // },1000)
//     return new Promise((resolve,reject)=>{
//         resolve(5);
//     });
//     //return 5;
// }
// function f2(x){
//     console.log(x+7)
// }
// const n=f1();
// const res=f2(n)
// console.log(res)


// function f1(n){
//     return new Promise((resolve,reject)=>{
//         //resolve(5);
//         //reject("Something wrong")

//         if(n>=0){
//             resolve(n)
//         }else{
//             reject("Something went wrong.")
//         }
//     });
// }
// function f2(x){
//     console.log(x+7)
// }
// f1(1000)
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));
//buy().then((n)=>PaymentAddress(n));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(value=>{
//         console.log(value.name)
//     })
// })
// .catch((err)=>console.log(err))

const fetchData=async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();
    data.map(value=>{
        console.log(value.name,value.email)
    })
};
fetchData();