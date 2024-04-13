// console.log("start array ");

// const array=[8,6,24,56,34,56,];
// console.log(array);
// console.log(array.length);
// console.log(array[3],array[4]);
// console.log(array.at(3));
// console.log(array[array.length-1]); // to find the las elemnet in array:::

//  opertion in array::
//  to insert element in array::
/*

array.push(44);
array.push(222);
console.log(array);
//  to delete element from the array :;


array.pop();
console.log(array);
//  to insert element in starting of array::
array.unshift(555);
array.unshift(666)
console.log(array);
// to delete element from starting:::
array.shift();
console.log(array);

// concatenation

const arr1=[5,4,3,2,1];
const arr2=[6,7,8,9,10,11,12,13,14,9,16,9,9,132];
const arr3=[25,20];
let newarray=arr1.concat(arr2,arr3);
console.log(newarray);

// to combine array into string
// Join 
let res=arr1.join("--");
console.log( typeof res);
console.log (res);


// Reverse the array::: "reverse"
let res1=arr1.reverse();
console.log(res1);

//  to check any value is present or not::"includes"

let res2=arr2.includes(8,1);
console.log(res2);

// to find the index of any value in array::"indexedof()"

let res3=arr2.indexOf(9,6);
console.log(res3);

// to find last index of array::"lastindexof();"

let res4=arr2.lastIndexOf(9)
console.log(res4);

//  array to string::: "tostring();"
const no=123;
let res5=no.toString();
let res6=arr2.toString("");
console.log(res5);
console.log(res6);



const arr1=[5,4,3,2,1];
const arr2=[6,7,8,9,10,11,12,13,14,9,16,9,9,132];
const arr3=[25,20];

//  to edit or cut an array:::"slice();"

let res=arr2.slice(2,8);
console.log(res);
let res1=arr2.slice(-5,-1);
console.log(res1);
//  to cut element from insde or b/w the array::"splice();"
let res2=arr2.splice(2,4);
console.log(arr2);
console.log(res2);

arr1.splice(2,0,8,9,10);
console.log(arr1);
//  we can also replace the element
arr1.splice(2,1,32);
console.log(arr1);
*/

// to apply operation on array we use ".map()"method:::

const arr=[5,4,3,2,1];
/*
let multi=arr.map((el,ind,arry)=>{
    console.log(el);
    console.log(ind);
console.log(arry);

    // return el*2
    return el*ind
});

console.log(multi);


//  filter method-----------------------------

let res=arr.filter((el)=>{
    return el>2
})
console.log(res);
*/
//  to reduce or want ans in single word ::".reduce();"

let res1=arr.reduce((a,b)=>{
    console.log("a is",a);
    console.log("b is ",b);
    return a*b;
},10)
console.log("total is",res1);

//  foreach is works same as .map but its change in same 
//    array its not store into new array :::::;

























