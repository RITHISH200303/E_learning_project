const studShow = document.getElementById("studShow");
const fackShow = document.getElementById("fackShow");
const stud = document.querySelector(".stud");
const faculty = document.querySelector(".faculty");
function stuOpen() {
  faculty.style.display = "none";
  fackShow.style.backgroundColor = "#feffff";
  fackShow.style.color = "#17252a";
  fackShow.style.transition = "all 0.5s ease-out";
  stud.style.display = "flex";
  studShow.style.backgroundColor = "#17252a";
  studShow.style.color = "#feffff";
  studShow.style.transition = "all 0.5s ease-out";
}
function fackOpen() {
  faculty.style.display = "flex";
  fackShow.style.backgroundColor = " #17252a";
  fackShow.style.color = " #feffff";
  fackShow.style.transition = "all 0.5s ease-out";
  stud.style.display = "none";
  studShow.style.backgroundColor = "#feffff";
  studShow.style.color = "#17252a";
  studShow.style.transition = "all 0.5s ease-out";
}
studShow.addEventListener("click", stuOpen);
fackShow.addEventListener("click", fackOpen);
