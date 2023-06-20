function getSurprise() {
  document.getElementById("outer").classList.toggle("hide");
  x.play();

}

function saroj() {
  document.getElementById("inner").classList.toggle("hide");
  x.pause();
}

function goBack() {
  document.getElementById('outer').className = 'outer'
  x.pause();
}

function goBackward() {
  document.getElementById("inner").classList.toggle("hide");
  x.play();
}

function whatsapp() {
  window.location.href = "http://wa.me/919582004427";
}

function call() {
  window.location.href = "tel:+917428843215";
}

const x = document.getElementById("myAudio");