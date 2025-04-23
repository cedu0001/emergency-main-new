/* Nyhed 1 */

/* const openBtn = document.querySelector("#openBtn1");
openBtn.addEventListener("click", openDialog);

function openDialog(){
    document.querySelector("#dialog-1").showModal();
} */

/* Nyhed 2 */

/* const openBtn2 = document.querySelector("#openBtn2");
openBtn2.addEventListener("click", openDialog2);


function openDialog2(e){
    e.preventDefault();
    document.querySelector("#dialog-2").showModal();
} */

/* Nyhed 3 */

/* const openBtn3 = document.querySelector("#openBtn3");
openBtn3.addEventListener("click", openDialog3);


function openDialog3(e){
    e.preventDefault();
    document.querySelector("#dialog-3").showModal();
} */

    /// Ny version

/* function setupArticle(article){
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector("dialog");
    const closeBtn = article.querySelector(".close-dialog");

    openBtn.addEventListener("click", openDialog);
    function openDialog() {
        dialog.showModal();
    }

    closeBtn.addEventListener("click", function(){
        
    dialog.close();

    });
}

const articles = document.querySelectorAll(".news_card");

articles.forEach(setupArticle);

articles.forEach((article) => {
    setupArticle(article);

});

articles.forEach(function(article){
    setupArticle(article);
});
 */
////////////////////// animation version

function setupArticle(article){ //Starter en funktion, der skal "sætte et artikel-element op", så det får interaktiv funktionalitet. Den tager ét article-element som input.
    const openBtn = article.querySelector("article > button");
    const dialog = article.querySelector("dialog");
    const closeBtn = article.querySelector(".close-dialog");

    openBtn.addEventListener("click", openDialog);
    function openDialog() {
        dialog.querySelector("h3").scrollIntoView(); // Starter ved h3'eren
        dialog.showModal(); //Åbner selve dialogen som en modal (den vises ovenpå resten af siden).
        
        dialog.classList.remove("dialog-animation");
        void dialog.offsetWidth;
        dialog.classList.add("dialog-animation");
    }
//Først fjernes animationsklassen. void dialog.offsetWidth; tvinger browseren til at "genberegne layout". Så tilføjes klassen igen = animationen starter forfra.
    closeBtn.addEventListener("click", function(){
    dialog.close();

    });
}

const articles = document.querySelectorAll(".news_card"); // Finder alle elementer med klassen .news_card (formodentlig artikler), og gemmer dem i en liste.

articles.forEach(setupArticle); // Går igennem hver artikel og kalder setupArticle(article) én gang for hver.

articles.forEach((article) => {
    setupArticle(article);

});

articles.forEach(function(article){
    setupArticle(article);
});

