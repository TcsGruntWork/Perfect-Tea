const navBtn = document.querySelector('#nav-btn');
const navBar = document.querySelector('#navbar');
const closeBtn = document.querySelector('#nav-close');


navBtn.addEventListener('click', function() {
  navBar.classList.add('showNav');
});

closeBtn.addEventListener('click', function() {
  navBar.classList.remove('showNav');
});


