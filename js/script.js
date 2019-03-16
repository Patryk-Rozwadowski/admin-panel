'use strict';
// OVERLAY
var overlay = document.querySelector('.overlay-bg');

// QUIT MODAL container
var quitModalContainer = document.querySelector('.quit-modal-container');

// QUIT MODAL OPEN
document.querySelector(".nav--exit").addEventListener('click', function(){
  openModal();
});

// OPEN MODAL FUNCTION
function openModal() {
  overlay.classList.add('show');
  quitModalContainer.classList.add('show');
};
// CLOSE MODAL FUNCTION
function closeModal() {
  overlay.classList.remove('show')
  quitModalContainer.classList.remove('show')
}

// CLICK OUTSIDE CLOSE
overlay.addEventListener('click', function(e) {
  if(e.target === this) {
    overlay.classList.remove('show');
    quitModalContainer.classList.remove('show');
  }
})
// ESC QUIT
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }

})
/*

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }

})
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('#quit-modal').classList.remove('show')
}
document.querySelector(".js--close-modal").addEventListener('click', function(){
  closeModal();
});
*/
