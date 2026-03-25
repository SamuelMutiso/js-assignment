// Step 1: Function to swap first and last letters
function swap(str) {
    if (str.length <= 1) {
        return str; // Rule: length must be broader than or equal to 1
    }

    let first = str[0];
    let last = str[str.length - 1];
    let middle = str.substring(1, str.length - 1);

    return last + middle + first;
}

console.log(swap("Samuel")); // lamueS