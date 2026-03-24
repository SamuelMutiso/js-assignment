function checkFifty(a, b) {
    // We check three things: 
    // 1. Is 'a' 50? 
    // OR 2. Is 'b' 50? 
    // OR 3. Is their sum (a + b) 50?
    if (a === 50 || b === 50 || (a + b) === 50) {
        return true;
    } else {
        return false;
    }
}

// Testing to see the difference
console.log(checkFifty(50, 10));  // true (first number is 50)
console.log(checkFifty(20, 50));  // true (second number is 50)
console.log(checkFifty(20, 30));  // true (sum is 50)
console.log(checkFifty(10, 10));  // false (none of the conditions are met)
