const a = document.querySelector('.navbar-2');
const close = document.querySelector('.button-close');
const stroke = document.querySelector('.stroke');
const logo = document.querySelector('.logo');

stroke.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu)

function showMenu(){
        a.setAttribute('style', 'display:block;');
        if (a.style.display === 'block'){
            logo.classList.remove('logo');
            logo.classList.add('small-logo');
        }
}

function closeMenu(){
        a.setAttribute('style', 'display:none;');
        if (a.style.display === 'none'){
            logo.classList.remove('small-logo');
            logo.classList.add('logo');
        }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slide');
    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
//    slides[slideIndex - 1].className +='active';
    setTimeout(showSlides, 5000);

}