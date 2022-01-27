// JavaScript Boiler Plate code Explaination (OJ)

function runProgram(input){
    // this is the main function, where user write his code or logic.
    // input is an argument which is passed by user.
}
process.stdin.resume();
//  A Readable Stream that points to a standard input stream (stdin).
// Standard input streams are paused by default,
//  so you must call process.stdin.resume() to resume receiving.
process.stdin.setEncoding("ascii");
//set the enconding for received data to ascii(American Standard Code For Information Interchange) so it will be readable
let read = "";
//  declaring a empty string read

process.stdin.on("data", function (input) {
/*
   The process.stdin property is an inbuilt application programming interface of the 
   process module which listens for the user input. The stdin property of the process 
   object is a Readable Stream. It uses on() function to listen for the event.
*/
   read += input;
   // Enter any User input, 
   //if data is coming through, put it in the read string. 
   // keep receiving data until no more comes through
});


process.stdin.on("end", function () {
   // after the transmission when the end signal is received
   //  break the string up and push each new line (\n == new line) as an element into the array.
   read = read.replace(/\n$/,"")
   // reading the input by separating the next lines
   runProgram(read);
   // triggering the runProgram method means calling main function with read argument
});

process.on("SIGINT", function () {
    // If SIGINT process is called then this will run first then the next line
   read = read.replace(/\n$/,"")
   // first it will read the input;
   // it will separate new each line input with a new line 
   runProgram(read);
   // then it will call the runprogram() function with read as argument.
   process.exit(0);
   // finally it will exit from the process by 0.
});