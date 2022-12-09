window.onload = function() {
    localStorage.getItem("myTotal");
    document.getElementById("myTotal").innerHTML = '$' + localStorage.getItem("myTotal"); 
}

function startingAmountFunction() {
    var starting = document.getElementById("startingInput");
    document.getElementById("myTotal").innerHTML = starting.value;
    localStorage.setItem('myTotal', starting.value);
}

function incomeFunction(){
    var income = document.getElementById("incomeInput");
    
    currentTotal = parseFloat(income.value) + parseFloat(localStorage.getItem("myTotal"));
    
    localStorage.setItem('myTotal', currentTotal);
    document.getElementById("myTotal").innerHTML = '$' + currentTotal;
}

function expenseFunction(){
    var expense = document.getElementById("expenseInput");
    
    currentTotal = parseFloat(localStorage.getItem("myTotal")) -parseFloat(expense.value);
    
    localStorage.setItem('myTotal', currentTotal);
    document.getElementById("myTotal").innerHTML = '$' + currentTotal;
}