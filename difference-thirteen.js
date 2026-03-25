function getDifference(n) {
    // Step 1: Check if the number is greater than 13
    if (n > 13) {
        // Step 2: Calculate the  difference and times it by 2
        return (n - 13) * 2;
    } else {
        // Step 3: Otherwise, just return the standard difference
        return 13 - n;
    }
}

// Step 4: i want to test the function with two different cases
console.log(getDifference(10)); // Result: 3 (13 - 10)
console.log(getDifference(20)); // Result: 14 (20 - 13 = 7, then 7 * 2)