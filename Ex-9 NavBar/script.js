
// https://www.youtube.com/watch?v=Kp3HGwlXwCk  - linkul cu proiectele de JS

const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener("click", function(){
  let value = navbarLinks.classList.contains('navbar__collapse'); // we check if we have a class: 'navbar__collapse' or not ?
  
  if(value){
    navbarLinks.classList.remove('navbar__collapse');
   navbarBtn.classList.remove('change');
  } else 
  {
    navbarLinks.classList.add('navbar__collapse');
    navbarBtn.classList.add('change');
  }



})