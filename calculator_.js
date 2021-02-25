 var display = document.getElementById("ans");
 var operato = " ";
 var equation = " ";

 function EnterNumber(num1) {
     if (display.value == operato) {
         display.value = " ";
         display.value += num1;
         equation += num1
     } else {
         display.value += num1;
         equation += num1;
     }
     if (display.value == equation) {
         equation = " ";
         display.value = " ";
         display.value += num1;
         equation += num1

     }


 }

 function EnterOperator(op) {
     operato = op;
     display.value = op;
     equation += op;
 }

 /*
 eval() is a function property of the global object. The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression. If the argument represents one or more JavaScript statements, eval() evaluates the statements.
 And There are 
 Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval().
 */
 function EnterEqual() {
     equation = eval(equation);
     display.value = equation;
 }

 function EnterClear() {
     display.value = " ";
     equation = 0;
 }
