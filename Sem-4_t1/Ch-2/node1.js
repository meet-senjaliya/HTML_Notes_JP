/* USing setTimeout() */


// function main(cb){


//     console.log("Task 1 Completed")

//     setTimeout(function(){
//         cb("operation Completed");
//     },2000);
//     console.log("task 2 Completed")
// }

// function callback_fun(result){
//     console.log("Result:"+result)
// }

// main(callback_fun)

/******************************** */
const message = function(){
    console.log("print after 3 sec");
}
setTimeout(message,3000);
setTimeout(function(){
    console.log("0000");
},3000)

setTimeout(()=> {console.log("0000");},3000);