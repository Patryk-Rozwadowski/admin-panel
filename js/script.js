'use strict';

// HAMBURGER
var mobileMenu = document.getElementById('hamburger');

/////////////////////// OVERLAY////////////////
var overlayQuit = document.getElementById('overlay-quit');
var overlayQuitMobile = document.getElementById('overlay-quit-mobile');

var overlayLogin = document.getElementById('overlay-login');
var overlayLoginMobile = document.getElementById('overlay-login-mobile');

/////////////////// QUIT MODAL container /////////////////////
var quitModalContainer = document.querySelector('.quit-modal-container');
var quitModalContainerMobile = document.querySelector('.quit-modal-container-mobile');

var loginModalContainer = document.querySelector('.login-modal-container');
var loginModalContainerMobile = document.querySelector('.login-modal-container-mobile');

// QUIT MODAL OPEN
document.querySelector(".nav--exit").addEventListener('click', function(){
  openModalQuit();
});
document.querySelector(".sidebar--menu-items-quit").addEventListener('click', function(){
  openModalQuit();
});

// LOGIN
document.querySelector('.nav--profile').addEventListener('click', function(){
  openModalLogin();
});
document.querySelector('.sidebar--menu-items-login').addEventListener('click', function(){
  openModalLogin();
});

// OPEN MODAL FUNCTION
function openModalQuit() {
  overlayQuit.classList.add('show');
  quitModalContainer.classList.add('show');
};
function openModalLogin() {
  overlayLogin.classList.add('show');
  loginModalContainer.classList.add('show');
};

// CLOSE MODAL FUNCTION
function closeModal() {
  overlayQuit.classList.remove('show');
  overlayLogin.classList.remove('show');

  quitModalContainer.classList.remove('show');
  loginModalContainer.classList.remove('show');
};


// MODALS BUTTONS
document.querySelector(".js--close-modal").addEventListener('click', function(event){
  event.stopPropagation()
  closeModal();
});


// CLICK OUTSIDE CLOSE
overlayQuit.addEventListener('click', function(event) {
  if(event.target === this) {
    event.stopPropagation();
    closeModal();
  }
});
overlayLogin.addEventListener('click', function(event) {
  if(event.target === this) {
    event.stopPropagation();
    closeModal();
  }
});


// ESC QUIT
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});


/////////////////// MENU
// HAMBURGER MENU
function toggleMenu(visible) {
  document.querySelector('.sidebar--menu').classList.toggle('show', visible);
}

mobileMenu.addEventListener('click', function(event){
  event.stopPropagation();
  toggleMenu();
});


// WYKRES

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88, 45],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 10, 47, 11, 50, 44, 63, 76, 23 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48,97 ],
            // 7
            hidden: true,
        }]
    },
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
