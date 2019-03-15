'use strict';


document.querySelector(".nav--exit").addEventListener('click', function(){
  openModal();
});


function openModal() {
  document.querySelector('.overlay').classList.add('show');
  document.querySelector('#quit-modal').classList.add('show');
}

function closeModal() {
  document.querySelector('.overlay').classList.remove('show');
  document.querySelector('#quit-modal').classList.remove('show');
}
document.querySelector("#js--close-modal").addEventListener('click', function(e){
  closeModal();
});



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
