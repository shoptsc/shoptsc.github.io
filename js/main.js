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
const message = document.getElementById('message');
const file = document.getElementById('file');

form.addEventListener('submit', checkInput);
form.addEventListener('input', checkInput);

function checkInput(e){
    // get values from the inputs
    const nameValue = name.value.trim();
    const emailValues = email.value.trim();
    const phoneValues = phone.value.trim();
    const messageValues = message.value.trim();
    const fileValue = file.value;

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
      if (phoneValues === ''||!(phoneValues.match(phone_digit)) || phoneValues.length != 11){
        //show error
        //add error class
        setErrorFor(phone, 'please enter a valid phone number')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(phone);
      }

        atpos = emailValues.indexOf("@");
        dotpos = emailValues.lastIndexOf(".");
       if (emailValues === '' || (atpos < 1|| (dotpos - atpos < 2))){
        //show error
        //add error class

            setErrorFor(email, 'Please enter a valid email')
            e.preventDefault();

      }else{
        // add success class
        setSuccessFor(email);
      }


        if (messageValues === ''){
        //show error
        //add error class
        setErrorFor(message, 'please drop a message')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(message);
      }


        if (fileValue === ''){
        //show error
        //add error class
        setErrorFor(file, 'please upload a picture')
        e.preventDefault();
      }else{
        // add success class
        setSuccessFor(file);
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











