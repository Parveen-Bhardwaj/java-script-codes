/*
console.log("start DOM TOPIC");
console.log(document);
console.log(document.URL);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.images);
console.log(document.links);


//  tracing a element by its id 
 let byid=document.getElementById("parveen");
 let byid2=document.getElementById("par");
 let byid3=document.getElementById("prvn");


 console.log(byid);
 console.log(byid2);
 console.log(byid3);

//  selecting element by tagname its select 
//  collection of HTML element

let bytag=document.getElementsByTagName("p");
let bytag2=document.getElementsByTagName("section");

console.log(bytag);
console.log(bytag2);

// selecting a element by its classname

let byclass=document.getElementsByClassName("parven");
console.log(byclass);

// tp select tag with its sttribute and type 
//  use  queryselector

let byquery=document.querySelector("input[type=number]");
console.log(byquery);

//  query selector can select all the id,class,tag etc.
//  but its fetch only first match 
//  to selct all match use queryselectorall.
let  byqueryid=document.querySelector("#parveen");
let  byqueryid2=document.querySelector(".punit");
let  byqueryid3=document.querySelector("p");
let  byqueryid4=document.querySelectorAll(".punit");

console.log(byqueryid);
console.log(byqueryid2);
console.log(byqueryid3);
console.log(byqueryid4);

let nye=document.querySelector("#anita");
let old=document.getElementById("#parvesh");
let middle=document.getElementsByTagName("h3");

console.log(nye);
console.log(old);
console.log(middle);


//  select and modify the element

const forupdate=document.querySelector("p");
console.log(forupdate);
forupdate.innerText=" my name is punit now instead of parveen ";
const update2=document.getElementById("parveen");
console.log(update2);
update2.textContent="return parveen same";

let update3=document.querySelector("section");
console.log(update3);
update3.textContent="practice over";
let update4=document.querySelector(".maintag");
console.log(update4);
update4.textContent="new container"



//  to update all element of a table

let liel=document.getElementsByTagName("li");
console.log(liel);

const liel2=document.querySelectorAll("li");
console.log(liel2);

liel2.forEach(el => {
    console.log(el.innerText);
    // el.textContent=`city -->$(el.textContent)`;
    el.textContent="city -->"+el.textContent;
    el.style.color="orange";
    el.style.backgroundColor="#ddd"
    el.style.StylePropertyMap="grey"
    
});


//  adding css by js from another sheet of css

const divone=document.getElementById("one");
console.log(divone);
divone.className="green"
// divone.className="orange"

// to add multiple css on a particuer element;
//  use divone.classlist.add("name of class");

const divone=document.getElementById("one");
console.log(divone);
divone.classList.add("green");
divone.classList.add("orange");
divone.textContent="now am changing it";
console.log(divone);


//  title tag is not working
divone.title="any title"

//  creating an html elemnt using js 
const connect=document.createElement("li");
const search=document.getElementById("ol");
search.appendChild(connect);
connect.textContent="parveen sharma";
// connect.append("parveen sharma");  // to add direct string using append



//  create a table using java-script----------------
*/

//  const table=document.createElement("table")
const table=document.getElementById("table");
const thead=document.createElement("thead");
// thead.textContent="name";
table.appendChild(thead);
const tablerow=document.createElement("tr");
thead.appendChild(tablerow);



 function createthcontent(content){
    let thel=document.createElement("th");
    thel.textContent=(content);
    return thel;
 }
  const itemoftable=["name","mobile","class","branch"];

  itemoftable.forEach(el=> {
    const callfun= createthcontent(el);
    tablerow.appendChild(callfun);

});
// /* 
const tablebody=document.createElement("tbody");
const tablerow2=document.createElement("tr");
table.appendChild(tablebody);
tablebody.appendChild(tablerow2);

function createbodyvalue(content){
    let thel=document.createElement("td");
    thel.textContent=(content);
    return thel;
}

const valueoftable=["parveen",8278259968,"msc","ICT"];


valueoftable.forEach(el=> {
    const callfun= createbodyvalue(el);
    tablerow2.appendChild(callfun);

});
// */ 




























