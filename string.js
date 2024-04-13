console.log("string in js");
/*
//  string in js ------------------

var a= "hye its parveen ";
var res=a.startsWith("hye");
console.log(res);

// when we want to use same quotes in string:::(use \')  
let Name='parveen is\' my name ';
let nme='my name is :: \n parveen sharma'
console.log(Name);
console.log(nme);
console.log(nme.length);
console.log(nme[9]);

let add=a+nme;
console.log(add);

// templete literals::::
//  when we write variables and string into a same place:::
*/
let Name = "parveen sharma";
let age = "27";
let place ="V.P.O (bapora)";

console.log(`my name is ${Name} and i am ${age} years old. ,\n my address is ${place}::: `);

//  methods on the string 
let b= Name.indexOf('a',11);
console.log(b);
//  includes gives only boolean value ::::

let c= Name.includes('a',8);
console.log(c);

//  charAt:: to fond char. at any index::
console.log(Name.charAt(8));

let nye = Name.toUpperCase();
console.log(nye);
let lower=Name.toLowerCase();
console.log(lower);

// split:: to split the word and conert it into array 

let splitstr=Name.split(" ");
console.log(splitstr);

//  subsstring ::
let subs=Name.substring(1,4);
console.log(subs);

//  replace ::; to replace any word from the string

let replac=Name.replace('parveen','punit');
console.log(replac);


















