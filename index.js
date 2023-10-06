var isstatus = document.querySelector("h3");
var card = document.querySelector("#card");
var content = document.querySelector("#content");
var addFriend = document.querySelector("#add");
var remove = document.querySelector("#remove");
var msg = document.querySelector(".msg");
var check = 0;
var randi = "#";

addFriend.addEventListener("click", function () {
  if (check == 0) {
    isstatus.innerHTML = "Friend";
    isstatus.style.marginLeft = "35%";
    isstatus.style.color = "#4d9e77";
    addFriend.style.display = "none";
    remove.style.width = "14.5rem";
    remove.style.marginLeft = "20px";
    check = 1;
  } else {
    isstatus.innerHTML = "Requested";
    isstatus.style.marginLeft = "35%";
    isstatus.style.color = "#4d9e77";
    addFriend.style.display = "none";
    remove.style.width = "14.5rem";
    remove.style.marginLeft = "20px";
    remove.style.display = "initial";
  }
});
function helo() {
  if (check == 0) {
    var element = document.getElementById("content");
    msg.innerHTML = "No More Requests :(";
    element.classList.toggle("btncng");
    card.style.backgroundImage = "url(" + randi + ")";
  } else {
    isstatus.innerHTML = "Unknown";
    isstatus.style.color = "black";
    addFriend.style.display = "initial";
    addFriend.style.width = "14.5rem";
    addFriend.style.marginLeft = "20px";
    remove.style.display = "none";
  }
}
