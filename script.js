
function openVault() {
    if (evaluitInput1() && evaluitInput2() && evaluitInput3()) {
        document.getElementById("openIt").disabled = false;
    }
    else {
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
    else {
        document.getElementById("openIt").disabled = true;
    }
}





const rotateButton = document.getElementById("openIt");
const rotateImage = document.getElementById("rotateImage");

rotateButton.addEventListener("click", () => {
    // تعریف توالی چرخش‌ها به عنوان یک آرایه
    const rotations = [
        { degree: -38, duration: 1000 }, // چرخش 45 درجه در جهت عقربه‌های ساعت در 1 ثانیه
        { degree: 218, duration: 2000 }, // چرخش 180 درجه در جهت خلاف عقربه‌های ساعت در 2 ثانیه
        { degree: -140, duration: 1500 }, // چرخش -150 درجه در جهت عقربه‌های ساعت در 1.5 ثانیه
    ];

    // تابع اجرای چرخش
    function performRotation(rotationsArray, index) {
        if (index < rotationsArray.length) {
            const rotation = rotationsArray[index];
            rotateImage.style.transitionDuration = `${rotation.duration}ms`;
            rotateImage.style.transform = `rotate(${rotation.degree}deg)`;

            // فراخوانی تابع برای چرخش بعدی بعد از مدت زمان مشخص شده
            setTimeout(() => {
                performRotation(rotationsArray, index + 1);
            }, rotation.duration + 400); // 0.4 ثانیه مکث بین چرخش‌ها
        }
        else if (index == rotationsArray.length) {
            rotateButton.addEventListener("click", document.getElementById("lastLock").src = "assets/unlock2.png");
        }
    }

    // شروع اجرای توالی چرخش‌ها
    performRotation(rotations, 0);
});

