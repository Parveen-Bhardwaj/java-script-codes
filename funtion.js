// // // // // console.log("start function");


// // // // // let calculate=function(a,b,value,fun){
// // // // //     value()
// // // // //     console.log(a+b);
// // // // //     value();
// // // // // }

// // // // // function logsomething(){
// // // // //     console.log("logging  inside log something function");

// // // // // }
// // // // // calculate(11,12,logsomething,10);

// // // // function calculate(num){
// // // // i=0;
// // // // while (i<num) {
// // // //     ++i;
// // // //     console.log(i);
    
// // // // }
    
// // // // }

// // // // calculate(10)

// // // // function is first class citizen

// // // let sum=function result(a,b,pro){
// // //     console.log(a+b);
// // // let c;
// // // c=(a*b);
// // // console.log(c);
// // // pro(15,15);
// // // console.log(forward);
// // // }

// // // function forward(num1,num2) {
// // //     console.log(num1+num2);
// // //     console.log("smj aagya thoda thoda");
    
// // // }
// // // sum(10,20,forward);
// // // console.log(sum);

// // //  function inside an object;

// // let userinfo={
// //     name:"parveen sharma",
// //     class:"msc ist 2nd sem",
// //     student:true,
// //     calculate:function(a,b,val) {
// //         console.log(a+b);
// //         console.log("hye this is parven here ");

        
// //     }

// // }
// // for(let a in userinfo){
// // console.log(a);
// // }
// // console.log(userinfo);

// // anonyms function::::

// let calculate=function(no,fun){
//     console.log(no);
//     console.log(fun);
//     fun();

// }

// calculate(30,function(value){
//     console.log("value recived is value");
// })

//  return a function::::

// function calculate(){
    // a=10;
    // return a;
// 
// }
// let result=calculate()
// console.log(result);
// console.log(calculate)

// ----------------------------------------

// function returnfun(){
//     return function(){
//         console.log('calculate result');
//     }
// }
// let result=returnfun();
// console.log(result);
// result()



// ---------------------------------------------------

//  function without using function keywords

// let calculate=(name)=>{
//     console.log('function without using function keyword',name);
// }
// calculate("parveen")
// console.log(calculate);

// // --------------------------------------------------

// let parveen=()=> "sharma"
// let surname=parveen();
// console.log(parveen);
// console.log(surname);


// -------------------------------------------------------

// let getvalue1=(no,doublefun)=>{
//     return doublefun(no);
// }
// let res=getvalue1(20,(num)=>2*num);
// console.log(res);
// console.log(getvalue1);
/*
//  default parameter 
function name(naam="parveen sharma"){
    console.log("my name is ::",naam);
}
name("bhardwaj ji");
name();
*/



//  recursion in function :::::::------------
/*
function sum(no){
    if (no>0) {
        return no+sum(no-1);
    }
    else{
        return no;
   }
}
let res=sum(6);
console.log(res);
*/
// To find factorial of a number using recursion 

function factorial(no){
    if (no>0) {
        return no*factorial(no-1)    
    }
    else{
        return 1;
    }
}
let res=factorial(5);
console.log(res);
