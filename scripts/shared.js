const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

// backdrop.style.display="block"

let selectPlanBtn = document.querySelectorAll(".plan button");
// console.log(selectPlanBtn)

const modalCloseBtn = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

backdrop.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
