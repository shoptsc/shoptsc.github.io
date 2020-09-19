
const button = document.querySelectorAll('.keys');
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const reset = document.querySelector('.reset');


for (i of button){
  i.addEventListener('click', (e) =>{
    number = e.target.dataset.num;
    input.value += number;
  })
}

equal.addEventListener('click', equate);
function equate(e){
  let phone_digit = /^[0-9].+$/;
  if (input.value ===''|| !((input.value).match(phone_digit))){
    input.value = 'please enter a value'
  } else{
    let answer = eval(input.value);
    input.value = answer;
  }
}

reset.addEventListener('click', (e) =>{
    input.value = ""
})
