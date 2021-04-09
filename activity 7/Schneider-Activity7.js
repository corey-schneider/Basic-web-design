//Global variables
var prevCalc = 0;
var calc = "";

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}

window.onload = function() {
    document.getElementById("btn1").onclick = btn1;
    document.getElementById("btn2").onclick = btn2;
    document.getElementById("btn3").onclick = btn3;
    document.getElementById("btn4").onclick = btn4;
    document.getElementById("btn5").onclick = btn5;
    document.getElementById("btn6").onclick = btn6;
    document.getElementById("btn7").onclick = btn7;
    document.getElementById("btn8").onclick = btn8;
    document.getElementById("btn9").onclick = btn9;
    document.getElementById("btn0").onclick = btn0;
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = squared;
    document.getElementById("btnDivide").onclick = divide;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnSqrt").onclick = sqroot;
    document.getElementById("btnFloor").onclick = floor;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnDecimal").onclick = decimal;
    document.getElementById("btnReset").onclick = clear;

    document.getElementById("btnCalc").onclick = calculate;
    //document.getElementsByName("btn2")
   // document.getElementById("frmCalc").onclick = handleButtonClick2;
    //etc etc
    //etc etc
    //etc etc
}

//this is not pretty, but btn(x) { ...value += x } doesn't work
function btn1() {
    document.frmCalc.txtNumber.value += 1;
}
function btn2() {
    document.frmCalc.txtNumber.value += 2;
}
function btn3() {
    document.frmCalc.txtNumber.value += 3;
}
function btn4() {
    document.frmCalc.txtNumber.value += 4;
}
function btn5() {
    document.frmCalc.txtNumber.value += 5;
}
function btn6() {
    document.frmCalc.txtNumber.value += 6;
}
function btn7() {
    document.frmCalc.txtNumber.value += 7;
}
function btn8() {
    document.frmCalc.txtNumber.value += 8;
}
function btn9() {
    document.frmCalc.txtNumber.value += 9;
}
function btn0() {
    document.frmCalc.txtNumber.value += 0;
}
function decimal() {
    document.frmCalc.txtNumber.value += '.';
}

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num--;
        document.frmCalc.txtNumber.value = num;
    }
}
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Sub";
    }
}
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Mult";
    }
}
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Div";
    }
}
function squared() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = (num*num);
    }
}
function sqroot() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = Math.sqrt(num);
    }
}
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "power";
    }
}
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = Math.floor(num);
    }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = Math.round(num);
    }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        if (calc == "Add") {
            //var total = previousCalc + num;
            var total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Sub") {
            //var total = previousCalc + num;
            var total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Mult") {
            //var total = previousCalc + num;
            var total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Div") {
            //var total = previousCalc + num;
            var total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "power") {
            var total = Math.pow(prevCalc, num);
            document.frmCalc.txtNumber.value = total;
        }

    }

}