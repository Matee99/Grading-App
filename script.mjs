function calculateGrade() {
    var percentage = parseFloat(document.getElementById("percentageInput").value);

    if (isNaN(percentage)) {
        document.getElementById("result").textContent = "Please enter a valid percentage.";
    } else {
        var grade;

        if (percentage >=90) {
            grade = "A1+";
        } else if (percentage >=80){
            grade = "A1";
        } else if (percentage >=70) {
            grade = "B+";
        }
            else if (percentage >=60) {
                grade = "B";
        } 
        else if (percentage >=50) {
            grade = "C";
        }
        else if (percentage >=40) {
            grade = "D";
                    }
      else 
      {
            grade = "E";
        }

        document.getElementById("result").textContent = "Your grade is: " + grade;
    }
}
