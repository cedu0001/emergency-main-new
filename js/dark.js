const css = document.querySelector("#lightmode");
console.log(css.href);

const btn3 = document.querySelector("#changeBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3(){
if(css.href.includes("css/custom-dark.css")){ //css.href er den sti (URL) til det aktive stylesheet. -- includes(...) betyder: "indeholder den denne tekst?"
    css.href = "css/custom.css"; // Hvis siden er i mørk tilstand, så skift til lys tilstand ved at pege på det lyse CSS-fil (custom.css).
    switchtext3.textContent = "Dark Mode";
} else { // hvis man ikke er i mørk tilstand
    css.href = "css/custom-dark.css"; //...så skifter man til mørk tilstand ved at pege på det mørke CSS-fil (custom-dark.css).
    switchtext3.textContent = "Light Mode";
}

}