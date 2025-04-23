const css = document.querySelector("#lightmode");
console.log(css.href);

const btn3 = document.querySelector("#changeBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3(){
if(css.href.includes("css/custom-dark.css")){
    css.href = "css/custom.css";
    switchtext3.textContent = "Dark Mode";
} else {
    css.href = "css/custom-dark.css";
    switchtext3.textContent = "Light Mode";
}

}