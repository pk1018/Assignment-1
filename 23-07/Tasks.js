// // T1
// function cube(arr){
//     return arr.map((e)=>e**3);
// }
// console.log(cube([1,2,3,4]))

// // T2

// function sum(arr){
//     return arr.reduce((acc,e)=>e+acc,0);
// }
// console.log(sum([1,2,3,4]))

// // T3

// function isPrime(num){
//     if(num<=1)return false;

//     for(var i=2;i*i<=num;i++){
//         if(num%i==0)return false;
//     }
//     return true;
// }

// function prime(arr){
//     return arr.filter((e)=> isPrime(e))
// }

// console.log(prime([1,2,3,4]))

// // T4

// function avg(arr){
//     oddArr = arr.filter((e)=> e%2!=0);
//     squaresArr=oddArr.map(e => e*e);
//     sum = squaresArr.reduce((acc,e)=>e+acc,0);

//     return sum/squaresArr.length;

// }

// console.log(avg([1,2,3,4,5]))

// T5

// function longest(arr){
//     let lenArr= arr.map((e)=>e.length);
//     console.log(lenArr)
//     let max=-1
//     let idx=-1
//     for(var i=0;i<lenArr.length;i++){
//        if(lenArr[i]>max){
//         max=lenArr[i];
//         idx=i;
//        }
//     }

//     return arr[idx];
// }

// console.log(longest(["a","ab","abc"]))

// T6

// function captital(sentence){
//     arr = sentence.split(" ");
//     updated=arr.map((e)=> {
//         first=e.charAt(0).toUpperCase();
//         return first+e.slice(1);
//     })
//     return updated.join(" ");
// }

// console.log(captital("Hello how are you?"))

// T7

// students=[
//     {name: "p",score: 70},
//     {name: "o",score:50}
// ]

// function passed(arr){
//     return arr.filter((e)=> e.score >= 60);
// }

// console.log(passed(students))

// T8

// function Counter(){
// let count=0;
// return {
//     increment : () =>{
//         count ++;
//         return count;
//     }
// };
// }

// const ctr1=Counter()
// const ctr2=Counter();
// console.log(ctr1.increment())
// console.log(ctr1.increment())
// console.log(ctr2.increment())

// T9

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   add(val1, val2) {
//     return new Promise((resolve, reject) => {
//       this.result = val1 + val2;
//       resolve(this.result);
//     });
//   }

//   sub(val1, val2) {
//     return new Promise((resolve, reject) => {
//       this.result = val1 - val2;
//       resolve(this.result);
//     });
//   }

//   div(val1, val2) {
//     return new Promise((resolve, reject) => {
//       if (val2 == 0) {
//         reject("Undefined");
//       } else {
//         this.result = val1 / val2;
//         resolve(this.result);
//       }
//     });
//   }

//   mul(val1, val2) {
//     return new Promise((resolve, reject) => {
//       this.result = val1 * val2;
//       resolve(this.result);
//     });
//   }
// }


// const cal=new Calculator();
// cal.add(2,3).then(result => {
//     console.log("After addition",result);
//     return cal.div(2,0);
// }).then( result => {
//     console.log("After division", result);
// }).catch( err =>{
//     console.log("Error",err)
// })


// T10
students=[
    {name: "p",score: 70},
    {name: "o",score:50},
    {name:"a",score:60}
]

function total(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element.score;
    });
    return sum;
}

console.log(total(students))
