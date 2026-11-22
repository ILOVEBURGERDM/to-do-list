/*BRING UP & CLOSEFORM*/
const addBtn = document.querySelector(".addbtn");
const dialog = document.querySelector("#form-dialog");
const cancelBtn = document.querySelector("#cancel");

addBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.closest());



