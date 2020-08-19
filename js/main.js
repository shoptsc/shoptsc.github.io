const button = document.getElementById('button');

button.addEventListener('click', calculate);

function symbolForce(value){
    value = Math.ceil(value * 100)/100;
    return value + ' N';
}

function symbolWork(value){
    value = Math.ceil(value * 100)/100;
    return value + ' J';
}

function symbolPower(value){
    value = Math.ceil(value * 100)/100;
    return value + ' J/S';
}

function calculate(e){
    e.preventDefault();
    let mass = document.getElementById('mass').value;
    let accelerate = document.getElementById('speed').value;
    let distance = document.getElementById('dist').value;
    let time = document.getElementById('timing').value;

    let force = mass * accelerate;
    let work = force * distance;
    let power = work / time;

    document.getElementById('force').innerHTML = symbolForce(force);
    document.getElementById('work').innerHTML = symbolWork(work);
    document.getElementById('power').innerHTML = symbolPower(power);
}
