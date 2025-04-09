document.querySelector("#headCircle").addEventListener("mouseover", headHighligt);
document.querySelector("#headCircle").addEventListener("mouseout", headUnHighligt);
document.querySelector("#headCircle").addEventListener("click", headInfo);

//drage
document.querySelector("#dragonColor").addEventListener("mouseover", dragonHighligt);
document.querySelector("#dragonColor").addEventListener("mouseout", dragonUnHighligt);
document.querySelector("#dragonColor").addEventListener("click", dragonInfo);

//fe
document.querySelector("#fairyLight").addEventListener("mouseover", fairyHighligt);
document.querySelector("#fairyLight").addEventListener("mouseout", fairyUnHighligt);
document.querySelector("#fairyLight").addEventListener("click", fairyInfo);

//mobil
document.querySelector("#phoneColor").addEventListener("mouseover", phoneHighligt);
document.querySelector("#phoneColor").addEventListener("mouseout", phoneUnHighligt);
document.querySelector("#phoneColor").addEventListener("click", phoneInfo);



function headHighligt(){
    console.log("headHighlight");
    document.querySelector("#headCircle").style.fill = "rgb(123, 157, 190)";

}

function headUnHighligt(){
    console.log("headUnHighlight");
    document.querySelector("#headCircle").style.fill = "#83898f";
}

function headInfo(){
    console.log("headInfo");

    animateBoxes();

    
    document.querySelector(".info-text > h2").textContent = "Hvor er du?!";
    document.querySelector(".info-text > article > p").textContent = "lorem20";
    document.querySelector("#efficiency").innerHTML = "<h3>test</h3> <p>where am i ahh</p>";
    document.querySelector("#requirement").innerHTML = "<h3>test</h3>";
}

//drage
function dragonHighligt(){
    console.log("dragonHighligt");
    document.querySelector("#dragonColor").style.fill = "rgb(144, 29, 21)";

}

function dragonUnHighligt(){
    console.log("dragonUnHighlight");
    document.querySelector("#dragonColor").style.fill = "#6d6e71";
}

function dragonInfo(){
    console.log("dragonInfo");

    animateBoxes();

    document.querySelector(".info-text > h2").textContent = "Fjendtlige skabninger!";
    document.querySelector(".info-text > article > p").textContent = "lorem20";
    document.querySelector("#efficiency").innerHTML = "<h3>test</h3> <p>rawrr</p>"
    document.querySelector("#requirement").innerHTML = "<h3>test</h3>"
}


//fe
function fairyHighligt(){
    console.log("fairyHighligt");
    document.querySelector("#fairyLight").style.fill = "rgb(228, 248, 74)";

}

function fairyUnHighligt(){
    console.log("fairyUnHighlight");
    document.querySelector("#fairyLight").style.fill = "#efefe9";
}

function fairyInfo(){
    console.log("fairyInfo");

    animateBoxes();

    document.querySelector(".info-text > h2").textContent = "Potientielle venner?";
    document.querySelector(".info-text > article > p").textContent = "lorem20";
    document.querySelector("#efficiency").innerHTML = "<h3>test</h3> hejjjjj"
    document.querySelector("#requirement").innerHTML = "<h3>test</h3>"
}

//mobil
    function phoneHighligt(){
        console.log("phoneHighligt");
        document.querySelector("#phoneColor").style.fill = "rgb(49, 77, 99)";
    
    }
    
    function phoneUnHighligt(){
        console.log("phoneUnHighlight");
        document.querySelector("#phoneColor").style.fill = "#bcbec0";
    }
    
    function phoneInfo(){
        console.log("phoneInfo");

        animateBoxes();

        document.querySelector(".info-text > h2").textContent = "Forsyninger";
        document.querySelector(".info-text > article > p").textContent = "lorem20";
        document.querySelector("#efficiency").innerHTML = "<h3>test</h3> <p>i hope insta works lmao</p>"
        document.querySelector("#requirement").innerHTML = "<h3>test</h3>"
    }


function animateBoxes(){
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);
}

function cleanup(){
    console.log("i clean(cleanup)")
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);
    document.querySelector("#efficiency").classList.remove("fadeIn");
    document.querySelector("#requirement").classList.remove("fadeIn");
}
