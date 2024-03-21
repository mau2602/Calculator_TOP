let num1
let num2 
let operator
const display = document.querySelector('.display')
display.textContent = parseInt(0)
let displayLimit = 14
displayText = display.textContent
let calculation

function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

// SHOWING NUMBERS ON DISPLAY
const numButtons = document.querySelectorAll('.button.number')    
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let num = button.textContent
        if(display.textContent != 0 && displayText.length <= displayLimit){
            displayText += num
            display.textContent = displayText
        } else if (operator != ''){
            displayText = num
            display.textContent = displayText
        } else {
            displayText = num
            display.textContent = displayText
        }
    })
})
//SHOWING OPERATORS ON DISPLAY
const operatorButtons = document.querySelectorAll('.button.operator')
if(display != '0'){ 
    operatorButtons.forEach(button => {
    button.addEventListener('click', () =>{
        operator = button.textContent
        num1 = parseFloat(display.textContent)
        display.textContent = ''
        })
    })
}
//Decimal numbers function by the insertion of a dot if it's not already in use
const dotDecimal = document.getElementById('decimal')
dotDecimal.addEventListener('click', () => {
    let dot = dotDecimal.textContent
    if(displayText.toString().includes('.')){
        return
    } else {
        displayText += dot
    }
    })
// SOLVING THE OPERATION - EQUALS BUTTON defines the num2 variable and executes the required math
const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', () => {
    num2 = parseFloat(display.textContent)
    if(num1 && num2 && operator){
        operate(num1, operator, num2)
    }
})
//FUNCTION OPERATE
function operate (num1, operator, num2){
    let result
    if(operator == '+'){
            result = add(num1, num2)
    } else if (operator == '-'){ 
            result =  subtract(num1, num2)
    } else if (operator == '*'){
            result =  multiply(num1, num2)
    } else {
            result =  divide(num1, num2)
    }
    if(result != Math.floor(result)){
        result = parseFloat(result.toFixed(8))
        displayText = result
        display.textContent = displayText
    }
    result = result.toString()
    if(result.length > 14){
        result = ((result) / 100).toExponential(4)
        displayText = result
        display.textContent = displayText
    }
    displayText = result
    display.textContent = displayText
}
// DELETE FUNCTION
const deleteLast = document.getElementById('delete')
deleteLast.addEventListener('click', () => {
    displayText = displayText.slice(0, -1)
    display.textContent = displayText
    if(displayText == ''){
        display.textContent = 0
    }
})
//CLEAR FUNCTION
const reset = document.getElementById('clear')
reset.addEventListener('click', () => {
    display.textContent = 0
    num1 = ''
    num2 = ''
    operator = ''
})