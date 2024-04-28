// 🚀 Day 50 Challenge: Start Coding! 🚀 //
//Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
setTimeout(function () {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
//Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Callback executed");
}, 0); // This gets queued to be executed by the event loop
console.log("End");
//Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous example
console.log("Before synchronous"); // Simulate a synchronous blocking operation
for (var i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous");
// Asynchronous example
console.log("Before asynchronous");
setTimeout(function () { console.log("Asynchronous completed"); }, 3000);
console.log("After asynchronous setup");
