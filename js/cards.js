//Teaser 1
document.querySelector("#pan").classList.add("pan_animation");

document.querySelector("#pan").classList.add("stop");

document.querySelector("#pan").addEventListener("mouseover", startAnimation);
document.querySelector("#pan").addEventListener("mouseout", stopAnimation);


//scroll
document.querySelector("#pan2").classList.add("up-down_animation");

document.querySelector("#pan2").classList.add("stop");

document.querySelector("#pan2").addEventListener("mouseover", startAnimation);
document.querySelector("#pan2").addEventListener("mouseout", stopAnimation);

//animation v---v

function startAnimation(){
    console.log("Start animation on", this.id);
    this.classList.remove("stop");
}

function stopAnimation(){
    console.log("Stop animation on", this.id);
    this.classList.add("stop");
}

