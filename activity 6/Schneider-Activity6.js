function startFunction() {
    var condition = true;

    do {

        var numGrade = prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries.", "");
        checkInput(numGrade); //makes sure user's input is a valid number

        if (numGrade == null || numGrade == "" || numGrade == 999) {
            alert("Bye!");
            condition = false;

        } else if ((numGrade <= 100 && numGrade >= 0) && numGrade != 999) {
            alert("Number grade = " + numGrade + "\nLetter grade = " + convertGrades(numGrade));
        }

    } while(condition); //will continue to loop unless condition is false.
    //continues to loop unless the user cancels the prompt, enters no value, or enters 999.
}

//converts a number to a letter grade
function convertGrades(num) {
    if(num >= 88) {
        return "A";
    } else if (num >= 80 && num <= 87) {
        return "B";
    } else if (num >= 68 && num <= 79) {
        return "C";
    } else if (num >= 60 && num <= 67) {
        return "D";
    } else {
        return "F";
    }
}

//checks to see if the input is a number or not
function checkInput(value) {
    if (isNaN(value)) {
        alert("Must input numbers");
        return false;
    }
}
