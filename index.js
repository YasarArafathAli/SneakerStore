
function handlePlus() {
    var inpNum = document.getElementById("num");
    var val = parseInt(inpNum.value) ;
    val += 1;
    inpNum.value = val;
    console.log(val);
}

function handleMinus() {
    var inpNum = document.getElementById("num");
    var val = parseInt(inpNum.value);
    val <= 0 ? 0 : val--;
    inpNum.value = val;
    console.log(val);
}