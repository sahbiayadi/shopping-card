let likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.firstChild.style.color == "black") {
      like.firstChild.style.color = "red";
    } else {
      like.firstChild.style.color = "black";
    }
  });
}

//btn plus
let plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  let oneplus = plus[i];
  oneplus.addEventListener("click", function () {
    oneplus.previousElementSibling.value++;
    total();
    total1();
    total2();
    total3();
  });
}
//btn moins

let minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minus.length; i++) {
  let oneminus = minus[i];
  oneminus.addEventListener("click", function () {
    if (oneminus.nextElementSibling.value > 1) {
      oneminus.nextElementSibling.value--;
      total();
      total1();
      total2();
      total3();
    }
  });
}

//remove
let deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let deletebtn = deletes[i];
  deletebtn.addEventListener("click", function () {
    deletebtn.parentElement.remove();
    total();
    total1();
    total2();
    total3();
  });
}

//total
let btnfinal = document.getElementById("finalPrice");
let items = document.getElementsByClassName("Item");
function total() {
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".price").innerText *
        item.querySelector(".Quant").value;
  }
  return (btnfinal.value = s);
}

//total1
function total1() {
  let q1 = document.getElementById("q1");
  let p1 = document.getElementById("p1");
  p1.innerText = q1.value * 1379;
}
function total2() {
  let q2 = document.getElementById("q2");
  let p2 = document.getElementById("p2");
  p2.innerText = q2.value * 176;
}
function total3() {
  let q3 = document.getElementById("q3");
  let p3 = document.getElementById("p3");
  p3.innerText = q3.value * 249;
}
