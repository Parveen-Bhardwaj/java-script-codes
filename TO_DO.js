console.log(" assignment of todo list");
const input=document.querySelector('input');
const button=document.querySelector('button');
const ullist=document.querySelector("ul");

button.addEventListener('click',()=>{
    const para=document.createElement("p");
const lilist=document.createElement("li")
para.textContent=input.value;



const btncomplete=document.createElement("button");
btncomplete.textContent="complete"
btncomplete.addEventListener('click',(event)=>{
    event.target.parentelement

})
const btndelete=document.createElement("button");
btndelete.textContent="delete";
btndelete.addEventListener('click',(event)=>{
    console.log(event.target.parentelement);
    // ullist.removechild(event.target.parentelement);
    // ullist.removeChild(event.target.parentelement)
    event.target.parentelement.remove();

});

lilist.append(para,btncomplete,btndelete);
ullist.appendChild(lilist);
input.value=""


});