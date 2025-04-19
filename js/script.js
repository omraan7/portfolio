let btnOppen = document.getElementById("oppen");
let btnClose = document.getElementById("cloose");
let container = document.querySelector(".list-2");

btnOppen.onclick = function () {
  btnClose.classList.add("hello");
  container.classList.add("hello");
  btnOppen.classList.remove("tt");
};
btnClose.onclick = function () {
  container.classList.remove("hello");
  btnClose.classList.remove("hello");
  btnOppen.classList.add("tt");
};

const boxs = document.querySelector(".hhee");
window.addEventListener("scroll", () => {
  const boxTops = boxs.getBoundingClientRect().top;
  const triggerpoint = window.innerHeight - 100;
  if (boxTops < triggerpoint) {
    boxs.classList.add("show");
  }
});

const box = document.querySelector(".hhe");
window.addEventListener("scroll", () => {
  const boxTop = box.getBoundingClientRect().top;
  const triggerpoint = window.innerHeight - 100;
  if (boxTop < triggerpoint) {
    box.classList.add("show");
  }
});
