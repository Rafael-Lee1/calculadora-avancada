const historyList = document.getElementById("historyList");
let calculationHistory = [];

function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
        addToHistory(expression, result);
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}

function sqrt() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        const result = Math.sqrt(value);
        document.getElementById("display").value = result;
        addToHistory(`√(${value})`, result);
    }
}

function power() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        const result = Math.pow(value, 2);
        document.getElementById("display").value = result;
        addToHistory(`(${value})²`, result);
    }
}

function clearHistory() {
    calculationHistory = [];
    renderHistory();
}

function addToHistory(expression, result) {
    calculationHistory.push({ expression, result });
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = "";
    calculationHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.expression} = ${entry.result}`;
        historyList.appendChild(li);
    });
}
