window.onload = function () {
  document.querySelector("#bg").style.display = "none";
};

function openbtn() {
  document.getElementById("sidenav").style.width = "100%";
  document.querySelector("#doc").style.display = "none";
}
function closebtn() {
  document.getElementById("sidenav").style.width = "0";
  document.querySelector("#doc").style.display = "flex";
}

function camera() {
  document.getElementById("camera").style.width = "100%";
  document.querySelector("#doc").style.display = "flex";
  swal("Look Deeper and You will find the Most Cutest Person");
}
function off() {
  document.getElementById("camera").style.width = "0";
  document.querySelector("#doc").style.display = "flex";
}
function search() {
  swal("Unfortunately,I was not able to add this due to an unexpected problem");
}
function active() {
  document.getElementById("active").style.display = "flex";
  document.querySelector("#do").style.display = "none";
  document.querySelector("#profile").style.display = "none";
}
function home() {
  document.getElementById("do").style.display = "flex";
  document.querySelector("#active").style.display = "none";
  document.querySelector("#profile").style.display = "none";
}
function profile() {
  document.getElementById("profile").style.display = "flex";
  document.querySelector(".do").style.display = "none";
  document.querySelector("#active").style.display = "none";
}
function reels() {
  swal("Tts not functional yet😥😅");
}
function photo() {
  swal("This too is not functional yet😥😅");
}
function following() {
  document.querySelector("#fip").style.backgroundColor = "white";
  document.querySelector("#fip").style.color = "black";
  document.querySelector("#fip").style.border = "1px solid black";
  document.querySelector("#fip").innerHTML = "Following";
  document.querySelector("#fip").style.width = "30%";
}
