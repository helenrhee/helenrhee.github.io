/**
* @param {string} lightboxID
*/
function unhideLightbox(lightboxID) {
document.getElementById('lightbox-overlay').classList.remove('hidden');
document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
unhideLightbox("picture1");
}
document.getElementById("pic1").onclick = unhideLightbox1;

function unhideLightbox2() {
unhideLightbox("picture2");
}
document.getElementById("pic2").onclick = unhideLightbox2;

function unhideLightbox3() {
unhideLightbox("picture3");
}
document.getElementById("pic3").onclick = unhideLightbox3;

function unhideLightbox4() {
unhideLightbox("picture4");
}
document.getElementById("pic4").onclick = unhideLightbox4;

function unhideLightbox5() {
unhideLightbox("picture5");
}
document.getElementById("pic5").onclick = unhideLightbox5;

function unhideLightbox6() {
unhideLightbox("picture6");
}
document.getElementById("pic6").onclick = unhideLightbox6;

function unhideLightbox7() {
unhideLightbox("picture7");
}
document.getElementById("pic7").onclick = unhideLightbox7;

function unhideLightbox8() {
unhideLightbox("picture8");
}
document.getElementById("pic8").onclick = unhideLightbox8;


function closeLightbox(lightboxID) {
document.getElementById('lightbox-overlay').classList.add('hidden');
document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
var lightboxElements = document.getElementsByClassName('lightbox');
for (var i = 0; i < lightboxElements.length; i++) {
  var id = lightboxElements[i].id;
  closeLightbox(id);
}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
