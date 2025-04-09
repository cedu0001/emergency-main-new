// have fat i slideren
const slider = document.querySelector("#patience");
const patienceRange = document.querySelector("#patience");
const patienceValue = document.querySelector("#patienceValue");

// Opdater span, når brugeren ændrer værdien
patienceRange.addEventListener("input", function() {
    patienceValue.textContent = patienceRange.value;
});

//sæt en eventlistener på den som opdaterer, når jeg laver ændringer 
slider.addEventListener("change", updateValue);

//min span skal opdaterer sin value (test content)
function updateValue(){
    console.log("updatevaluee");
    
    /*  patienceValue.textContent = slider.value; */
    if(slider.value > 49 && slider.value <85){
        console.log(`teskt er ${slider.value}`);
        slider.parentNode.style.accentColor = "var(--warning-color)"
    } else if(slider.value >= 85){
        slider.parentNode.style.accentColor = "var(--danger-color)"
    }
    else{
        slider.parentNode.style.accentColor = "var(--info-color)"
    }
}




//____________________________
function visAndetInput() {
    var select = document.getElementById("hvor-er-du");
    var andetInput = document.getElementById("andetInput");

    if (select.value === "andet") {
        andetInput.style.display = "block"; // Vis inputfelt
    } else {
        andetInput.style.display = "none"; // Skjul inputfelt
    }
}

//____________________________ Andet input felt
function visAndetInput2() {
    var select = document.getElementById("problem-dropdown");
    var andetInput2 = document.getElementById("andetInput2");

    if (select.value === "andet2") {
        andetInput2.style.display = "block"; // Vis inputfelt
    } else {
        andetInput2.style.display = "none"; // Skjul inputfelt
    }
}

//___________________________Summary

/* console.log(document.querySelector("#name").value); */

const submit = document.querySelector("#indsend");

//personoplysninger
const nameSum = document.querySelector("#sumName");
const strandedSum = document.querySelector("#sumHvor-er-du");

//beskriv dit problem
const problemSum = document.querySelector("#sumProblem-dropdown");
const problemFixSum = document.querySelector("#sumProblem-fix");

//Vælg din guide
const dinguideSum = document.querySelector("#sumDin-guide");
const patienceSum = document.querySelector("#sumPatience"); // summary-element


//Betaling
const genstandSum = document.querySelector("#sumGenstand");
const ja_nejSum = document.querySelector("#sumJANEJ")

//summary be gone
document.querySelector("#sum").style.display = "none";

submit.addEventListener("click", submitForm);

function submitForm(){
    document.querySelector("#sum").style.display = "block";
    nameSum.textContent = document.querySelector("#name").value;
    strandedSum.textContent = document.querySelector("#hvor-er-du").value;
    problemSum.textContent = document.querySelector("#problem-dropdown").value;
    problemFixSum.textContent = document.querySelector("#problem-fix").value;
    dinguideSum.textContent = document.querySelector("#din-guide").value;
    patienceSum.textContent = patienceRange.value;
    genstandSum.textContent = document.querySelector("#genstand").value;
    ja_nejSum.textContent = document.querySelector('input[name="ja-nej"]:checked').value;
    
}



//reset button
document.querySelector("#reset-btn").addEventListener("click", resetBTN)

function resetBTN(){
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
}






