// Step 1: Define a function that takes two parameters (a and b)
function findLargest(a, b) {
    if (a > b) {
        return a; // If a is bigger, send a back
    } else {
        return b; // Otherwise, send b back
    }
}

// Step 2: Call the function and display the result in the terminal
console.log(findLargest(45, 87)); 
console.log(findLargest(100, 20));