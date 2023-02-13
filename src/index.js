import "./style.css";
import "./component/calendario/calendario-component.css";

import "./component/calendario/calendario-component.ts";

const btnModal = document.querySelector(".buttom-modal-mock");

const modalShow = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modal = document.getElementsByClassName("modal-fade-show").item(0);

btnModal.addEventListener("click", (e) => {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal;
    modalShow.classList.toggle("modal-show");
    // falta bloquear el scroll de fondo
});

modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-container") {
        modalClose.click();
    }
});
modalClose.addEventListener("click", (e) => {
    modalShow.classList.toggle("modal-show");
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";

    // setTimeout(() => {
    //     modal.style.opacity = "0";
    //     modal.style.visibility = "hidden";
    // }, 300);
});
