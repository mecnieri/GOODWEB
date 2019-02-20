let myIndex = 0;
let timeout;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  timeout = setTimeout(carousel, 3000);
}

function currentSlide(n) {
  myIndex = n;
  clearTimeout(timeout);
  carousel();
}
