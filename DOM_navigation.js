console.log("starting dom navigation");
//  basically its use to select the child parents and siblings
//  of a documnent

// ? to select the childs from nodes

// ---- parents to child navigation

const ptcn=document.getElementById("posts");
console.log(ptcn);
console.log(ptcn.childNodes);
 console.log(ptcn.childNodes[3]);

//  -------------child to parents-----------

console.log(ptcn.parentElement);

// ------- accessings siblings---------------
console.log(ptcn.firstElementChild); // its remove text child 

console.log(ptcn.firstElementChild.nextElementSibling);
