'use strict';

// HAMBURGER
var mobileMenu = document.getElementById('hamburger');

var overlayQuit = document.getElementById('overlay-quit');
var overlayQuitMobile = document.getElementById('overlay-quit-mobile');

var overlayLogin = document.getElementById('overlay-login');
var overlayLoginMobile = document.getElementById('overlay-login-mobile');

var quitModalContainer = document.querySelector('.quit-modal-container');
var quitModalContainerMobile = document.querySelector('.quit-modal-container-mobile');

var loginModalContainer = document.querySelector('.login-modal-container');
var loginModalContainerMobile = document.querySelector('.login-modal-container-mobile');


document.querySelector(".nav--exit").addEventListener('click', function(){
  openModalQuit();
});
document.querySelector(".sidebar--menu-items-quit").addEventListener('click', function(){
  openModalQuit();
});


document.querySelector('.nav--profile').addEventListener('click', function(){
  openModalLogin();
});
document.querySelector('.sidebar--menu-items-login').addEventListener('click', function(){
  openModalLogin();
});


function openModalQuit() {
  overlayQuit.classList.add('show');
  quitModalContainer.classList.add('show');
};
function openModalLogin() {
  overlayLogin.classList.add('show');
  loginModalContainer.classList.add('show');
};


function closeModal() {
  overlayQuit.classList.remove('show');
  overlayLogin.classList.remove('show');

  quitModalContainer.classList.remove('show');
  loginModalContainer.classList.remove('show');
};



document.querySelector(".js--close-modal").addEventListener('click', function(event){
  event.stopPropagation()
  closeModal();
});



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

function toggleMenu(visible) {
  document.querySelector('.sidebar--menu').classList.toggle('show', visible);
}

mobileMenu.addEventListener('click', function(event){
  event.stopPropagation();
  toggleMenu();
});



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
