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
  overlay.classList.remove('show');
  quitModalContainer.classList.remove('show');
}

// CLICK OUTSIDE CLOSE
overlay.addEventListener('click', function(e) {
  if(e.target === this) {
    overlay.style.display = 'none'; // nie chce zadziałać overlay.classList.remove('show')
  }
})
// ESC QUIT
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }

})

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
