function calculateMarks() {
    // Get the input values
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    // Calculate total and average marks
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;

    // Determine the grade based on average marks
    let grade = '';
    if (averageMarks >= 90) {
        grade = 'A';
    } else if (averageMarks >= 80) {
        grade = 'B';
    } else if (averageMarks >= 70) {
        grade = 'C';
    } else if (averageMarks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the results
    document.getElementById('totalMarks').textContent = 'Total Marks: ' + totalMarks;
    document.getElementById('averageMarks').textContent = 'Average Marks: ' + averageMarks.toFixed(2);
    document.getElementById('grade').textContent = 'Grade: ' + grade;
}
