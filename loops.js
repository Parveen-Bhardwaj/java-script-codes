// // loops in 
// // print one to 10 number in js

// // for(i=0;i<=10;i++){
//     // console.log(i);
// // }
// // console.log("reverse");
// // 
// // for(i=10;i>=-8;i--){
//     // console.log(i);
// // }

// //  print the no with gap two
// // for(i=10;i<=50;i+=2){
//     // console.log(i);
// // }

// /*  how many multiples of 2 in 1024;
// for(i=1024;i>=0;i--){
//      if (i%2==0) {
//         console.log(i);
//     }
//  }
 

// //   while loop in js 
// let b=15;
// while (b<20) {
//     console.log( " this is parveen:::",b);
//     b++;
// }
// console.log(b);

// //  do while loop

// let a=20
// do{
//     console.log("this is do while loop",a);
//     a++
// }while (a<20)
// console.log(a);

// //  for IN loop in js 

// const arr=[10,15,20,25,30];
// for(let a in arr){
//     console.log('index',a,'value',arr[a]);
//     // console.log('values',arr[a]);
// }


// // loop in object
 
// const student={
//     name:"parveen shamrma",
//     class:"msc cs 2nd sem",
//     roll:230000613002,
//     address:"v.p.o (Bapora)",
//     student:true,
// };
// for(let a in student){
//     console.log("keys are",a,"values are",student[a]);
//     console.log(student.name);
// }


// const arr=[10,15,20,25,30];
// for(let a of arr){
//     // console.log('index',a,'value',a);
//     console.log(a);
// }
// console.log(arr.length)

// //  break and continue statement in js;

// //  Break
// let arr=[10,15,20,25,30,35,40,45,50]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     if (arr[i]===35) {
//         console.log("value found at index:::",i);
//         // break;
        
//     }
// }
// */

// //  continue statment in js::
// // continue;

// let arr=[10,15,20,25,30,35,40,45,50]
// for(let i=0;i<arr.length;i++){
//     if (arr[i]<35) {
//         // console.log("value found at index:::",i);
//       continue
//     }
//     console.log(arr[i]);
// }

console.log('switch case ');
let temp;
function getstate(statename){
    let temp;
    switch (statename) {
        case 'delhi':temp=40;
            place="sunday market"
            break;
    case 'haryana':
             temp=30;
             place= "cblu uni"        
            break;
    case 'punjab':
        temp=45;
        place="chandigarh"
break;
default: 
temp= 42;
place="unknown place"
break
 }
};
getstate("statement")





























































