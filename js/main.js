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
    document.querySelector(".info-text > article > p").textContent = "At blive fanget i et parallelt univers kan være skræmmende. Det er vigtigt at forstå, hvilken type verden du er i. Er du i en sci-fi verden med avanceret teknologi og fremmede væsner, eller i et magisk fantasy-univers, hvor magi og gamle kræfter styrer? Observer dine omgivelser – er der hologrammer og rumfartøjer, eller magiske væsner og trylleformularer? Dette kan hjælpe dig med at forstå, hvor du er, og hvordan du navigerer i denne nye virkelighed.";
    document.querySelector("#efficiency").innerHTML = "<h3>Sci-fi verden</h3> <p>Hvis du er i en sci-fi verden, kan det være en god idé at finde ud af, om der er noget teknologisk udstyr, som kan hjælpe dig med at kommunikere eller finde vej.</p>";


    
    document.querySelector("#requirement").innerHTML = "<h3>Fantasy verden</h3> <p>I en fantasy-verden er det ofte nyttigt at lære om de lokale kulturer og tro, da magiske færdigheder eller venskaber med de rette væsner kan være nøglen til at komme hjem.</p>";
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
    document.querySelector(".info-text > article > p").textContent = "Når du er i et parallelt univers, er det vigtigt at være opmærksom på de væsner, der måtte udgøre en trussel. Fjendtlige skabninger som drager, monstre eller teknologiske væsner kan være både farlige og uforudsigelige. Hvis du står overfor en drage eller et lignende væsen, er det vigtigt at vurdere, om den er aggressiv eller blot passer på sit territorium. ";
    document.querySelector("#efficiency").innerHTML = "<h3>Sci-fi verden</h3> <p>I sci-fi universer kan fjender ofte være robotter eller fremmede arter, som har egne mål og interesser.</p>"
    document.querySelector("#requirement").innerHTML = "<h3>Fantasy verden</h3> <p> I en fantasy-verden kan det være magiske væsner, der reagerer på dine handlinger – enten som ven eller fjende. Tænk hurtigt, og find ud af, hvordan du bedst kan beskytte dig selv eller undgå konfrontation.</p>"
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
    document.querySelector(".info-text > article > p").textContent = "Ikke alt i et parallelt univers er farligt! Der kan være væsner eller personer, der kan blive dine allierede og hjælpe dig med at finde vej hjem. Mød feer, gode trolde eller venlige væsner, som måske har viden om portaler eller skjulte stier, der fører tilbage til din verden. ";
    document.querySelector("#efficiency").innerHTML = "<h3>Sci-fi verden</h3> <p> I en sci-fi verden kan dette være kunstig intelligens, venlige rumvæsner eller andre, der har interesse i at hjælpe dig med at navigere i det ukendte.</p>"
    document.querySelector("#requirement").innerHTML = "<h3>Fantasy verden</h3> <p>I en fantasy-verden kan det være væsner, der har magiske evner og kender de skjulte kræfter, der kan hjælpe dig på din rejse. Sørg for at holde øjne og ører åbne for, hvem der kan blive en ven – i denne nye verden kan det være de allermindste væsner, der giver dig den største hjælp!</p>"
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

        document.querySelector(".info-text > h2").textContent = "Forsyninger/Redskaber";
        document.querySelector(".info-text > article > p").textContent = "Når du er i et parallelt univers, start med at gennemgå dine lommer. Det er ikke altid, du har din mobil, men måske har du en nøgle, et kort eller en gammel gadget, der kan hjælpe dig. Hvis du har din mobil, tjek om den virker – den kan være din vej til overlevelse. Kig derefter efter mad og vand, men vær forsigtig med, hvad du spiser! Ukendte fødevarer kan være farlige eller have uforudsigelige effekter.";
        document.querySelector("#efficiency").innerHTML = "<h3>Sci-fi verden</h3> <p>I en sci-fi verden kan din mobil give dig adgang til teknologi, kort eller hjælpe dig med at hacke systemer. Kig efter elektronisk udstyr eller ressourcer, som kan bruges til kommunikation eller navigation.</p>"
        document.querySelector("#requirement").innerHTML = "<h3>Fantasy verden</h3> <p>I en fantasy-verden kan du finde magiske objekter eller artefakter, der hjælper dig. Hold øje med krystaller, trylleformularer eller andre magiske genstande, der kan beskytte eller guide dig.</p>"
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
