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


const form = document.querySelector('.form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', checkInput);

function checkInput(e){
    // get values from the inputs
    const nameValue = name.value.trim();
    const emailValues = email.value.trim();
    const phoneValues = phone.value.trim();

     if (nameValue === ''){
        //show error
        //add error class
        setErrorFor(name, 'please enter a valid name')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(name);
      }

      let phone_digit = /^[0-9]+$/;
      if (phoneValues === ''||!(phoneValues.match(phone_digit))){
        //show error
        //add error class
        setErrorFor(phone, 'please enter a valid number')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(phone);
      }


       if (emailValues === ''){
        //show error
        //add error class
        setErrorFor(email, 'Please enter a valid email')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(email);
      }

}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-item error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-item success';
}











