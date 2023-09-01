
function openVault() {
    if (evaluitInput1() && evaluitInput2() && evaluitInput3()) {
        document.getElementById("openIt").disabled = false;
    }
    else{
        document.getElementById("openIt").disabled = true;
    }
}

function combinationOpener() {
        document.getElementById("lastLock").src = "assets/unlock2.png";
    }

function evaluitInput1() {
    let firstPin = document.getElementById("pin1").value;
    if (firstPin == 10) {
        document.getElementById("firstLock").src = "assets/unlock.png";
        document.getElementById("firstPinBtn").classList.remove("btn-primary");
        document.getElementById("firstPinBtn").classList.remove("btn-danger");
        document.getElementById("firstPinBtn").classList.add("btn-success");
        document.getElementById("firstPinBtn").innerHTML = ("Unlocked");
        return true;

    }
    else {
        document.getElementById("firstPinBtn").classList.remove("btn-primary");
        document.getElementById("firstPinBtn").classList.add("btn-danger");
        document.getElementById("firstLock").src = "assets/lock.png";
        document.getElementById("firstPinBtn").innerHTML = ("Try again");
        return false;

    }
}



function evaluitInput2() {
    let secondPin = document.getElementById("pin2").value;
    if (secondPin == 40) {
        document.getElementById("secondLock").src = "assets/unlock.png";
        document.getElementById("secondPinBtn").classList.remove("btn-primary");
        document.getElementById("secondPinBtn").classList.remove("btn-danger");
        document.getElementById("secondPinBtn").classList.add("btn-success");
        document.getElementById("secondPinBtn").innerHTML = ("Unlocked");
        return true;
    }
    else {
        document.getElementById("secondPinBtn").classList.remove("btn-primary")
        document.getElementById("secondPinBtn").classList.add("btn-danger")
        document.getElementById("secondLock").src = "assets/lock.png";
        document.getElementById("secondPinBtn").innerHTML = ("Try again");
        return false;

    }
}

function evaluitInput3() {
    let thirdPin = document.getElementById("pin3").value;
    if (thirdPin == 39) {
        document.getElementById("thirdLock").src = "assets/unlock.png";
        document.getElementById("thirdPinBtn").classList.remove("btn-primary");
        document.getElementById("thirdPinBtn").classList.remove("btn-danger");
        document.getElementById("thirdPinBtn").classList.add("btn-success");
        document.getElementById("thirdPinBtn").innerHTML = ("Unlocked");
        return true;

    }
    else {
        document.getElementById("thirdPinBtn").classList.remove("btn-primary");
        document.getElementById("thirdPinBtn").classList.add("btn-danger");
        document.getElementById("thirdLock").src = "assets/lock.png";
        document.getElementById("thirdPinBtn").innerHTML = ("Try again");
        return false;

    }
}
document.getElementById("firstPinBtn").addEventListener("click", openVault);
document.getElementById("secondPinBtn").addEventListener("click", openVault);
document.getElementById("thirdPinBtn").addEventListener("click", openVault);

function openVault() {
    if (evaluitInput1() && evaluitInput2() && evaluitInput3()) {
        document.getElementById("openIt").disabled = false;
    }
    else{
        document.getElementById("openIt").disabled = true;
    }
}

function combinationOpener() {
        document.getElementById("lastLock").src = "assets/unlock2.png";
    }
