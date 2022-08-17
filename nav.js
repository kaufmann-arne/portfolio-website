const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle("fa-times");

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinksFade 1s ease forwards ${index / 7 + 0.3}s`;
      }

      
    });
  });
}

navSlide();