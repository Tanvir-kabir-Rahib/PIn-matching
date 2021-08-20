function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    const displayPin = document.getElementById("display-pin");
    displayPin.value = pin;
}

document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const pinInput = document.getElementById("input-pin");
    if (isNaN(number)){
        if (number == "C"){
            pinInput.value = ""
        }
        if (number == "<"){
            lastCharSlice = pinInput.value.slice(0, -1)
            pinInput.value = lastCharSlice
        }
    }
    else{
        pinInput.value += number;
    }
})

function verifyPin(){
    const generatedPin = document.getElementById("display-pin").value;
    const inputedPin = document.getElementById("input-pin").value;
    const successNotification = document.getElementById("notify-success").style;
    const failNotification = document.getElementById("notify-fail").style;
    if (generatedPin == inputedPin){
        successNotification.display = "block"
        failNotification.display = "none"

    }
    else{
        successNotification.display = "none"
        failNotification.display = "block"
    }
}