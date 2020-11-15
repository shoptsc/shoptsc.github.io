function heading(){
  const h3 = document.querySelectorAll("h3");
  for (i of h3){
    i.addEventListener('click', (e)=>{
        e.target.nextElementSibling.classList.toggle('open')

    });
    }
}
heading();

