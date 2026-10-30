const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendBrackets() {
    if (
        display.value === "" ||
        /[+\-*/(]$/.test(display.value)
    ) {
        display.value += "(";
    } else {
        display.value += ")";
    }
}
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        const result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "undefined";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}