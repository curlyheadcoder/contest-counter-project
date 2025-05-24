let count = 0;

function updateDisplay(){
    document.getElementById('count').textContent = count;
}

function increment(){
    count++;
    document.getElementById('error-msg').textContent = "";
    updateDisplay();
}

function decrement(){
    if(count === 0){
        document.getElementById('error-msg').textContent = "Error : Cannot go below 0";
    } else {
        count--;
        document.getElementById('error-msg').textContent = "";
        updateDisplay();
    }
}

function clearCount(){
    count = 0;
    document.getElementById('error-msg').textContent = "";
    updateDisplay();
}
