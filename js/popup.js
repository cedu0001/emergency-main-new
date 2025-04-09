/* Nyhed 1 */

const openBtn = document.querySelector("#openBtn1");
openBtn.addEventListener("click", openDialog);

function openDialog(){
    document.querySelector("#dialog-1").showModal();
}

/* Nyhed 2 */

const openBtn2 = document.querySelector("#openBtn2");
openBtn2.addEventListener("click", openDialog2);


function openDialog2(e){
    e.preventDefault();
    document.querySelector("#dialog-2").showModal();
}

/* Nyhed 3 */

const openBtn3 = document.querySelector("#openBtn3");
openBtn3.addEventListener("click", openDialog3);


function openDialog3(e){
    e.preventDefault();
    document.querySelector("#dialog-3").showModal();
}