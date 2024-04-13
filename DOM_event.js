/*
console.log("starting dom events using javascript");
//  DOM  event 
//  Mouse based events
//  first method by calling function via button attribute in html file 
 function button(){
    console.log('my name is parveen');
 }

//  via js file we call the function through button 

const batn=document.getElementById("button");
// batn.addEventListener('click',button);
// ---------------or-------------

batn.addEventListener('click',()=>{
    console.log('my name is punt sharma');
});

// --------- third  method 
batn.onclick=button;
batn.onclick=()=>{
    console.log("parveen");
}


// hovering or  onmouseover----------  

const batn=document.getElementById("button");
batn.onmouseover=()=>{
    console.log("mouse on button");
    batn.disabled=false;
}
batn.onmouseout=()=>{
    console.log("out the mouse");
    batn.disabled=true;
}
*/
//  taking input from the user and print it 
let count=0
const input1=document.getElementById("username");
const input2=document.getElementById("address");
const button2=document.getElementById("printboth");
// const NAME=(input1.value) // use inside the body of the function 
// const ADDRESS=(input2.value)  // also insdide the function 
    


button2.onclick=()=>{
    if(count<=3) {
    
    let  NAME=(input1.value)
let ADDRESS=(input2.value)
 console.log(` my name is ${NAME}  and my address is ${ADDRESS}!`);

 input1.value="";
 input2.value="";
 
count++
}else{
    console.log(" too many attempts try After some time");
};

button2.onmouseover=()=>{
    button2.disabled=false;
}
button2.onmouseout=()=>{
    button2.disabled=true;
}
}


