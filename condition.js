// // //  if else statement 

// // let marks=50;
// // let time=75;
// //  if (marks<time) {
// // console.log(" student pass with excellent grade",marks,time);
    
// //  }
// //  else{
// //     console.log(" student fail");

// //  }

// // create a function which gives the result based on the student marks;
function calculateresult(marks){
    if (marks>100 | marks<0) {
        console.log("invalid marks !!!!");
        return;
    }
    if (marks>80) {
        console.log("student pass with distinction",marks);
    return;
    }
    if (marks>60) {
        console.log("student pass with first divison",marks);
    return
    }
    if (marks>40) {
        console.log("studen pass with second divison",marks);
    return
    }
    if (marks<=40) {
        console.log(" student fail");
    return
    }
}
calculateresult(62)


//  if, else if condition;

function calculate_result(marks){
        if (marks>100 | marks<0) {
            console.log("invalid marks !!!!");
            
        }
         else if (marks>80) {
            console.log("student pass with distinction",marks);
        }
       else if (marks>60) {
            console.log("student pass with first divison",marks);
        }
       else if (marks>40) {
            console.log("studen pass with second divison",marks);
        }
       else if (marks<=40) {
            console.log(" student fail");
        }
    }
    calculate_result(61)


