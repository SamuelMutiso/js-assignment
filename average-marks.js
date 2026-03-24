function calculateGrade() {
    // 1. Data: The marks for each student
    const jane = 80;
    const ciara = 77;
    const smith = 88;
    const thomas = 95;
    const shelby = 68;

    // 2. Arithmetic Expression: Calculate the average
    // We add them all up and divide by the number of students (5)
    const average = (jane + ciara + smith + thomas + shelby) / 5;
    
    console.log("Average Marks: " + average);

    // 3. Selection: Determine the grade based on the average
    if (average < 60) {
        return "Grade: F";
    } else if (average < 70) {
        return "Grade: D";
    } else if (average < 80) {
        return "Grade: C";
    } else if (average < 90) {
        return "Grade: B";
    } else {
        return "Grade: A";
    }
}

// 4. Display the result
console.log(calculateGrade());