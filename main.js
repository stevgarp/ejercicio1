const add = document.querySelector("#add");
const substract = document.querySelector('#substract');
console.log(add, substract);

add.addEventListener('click', () => {
    let output = document.querySelector('#output');
    let result = parseInt(output.innerHTML) +1;
    console.log(result)
    if (result <= 10){
        output.innerHTML = result;
    }else{
        alert('no puedes pasar de 10');
        output.innerHTML = 0;
    }
    
})
substract.addEventListener('click', () => {
    let output = document.querySelector('#output');
    let result = parseInt(output.innerHTML) -1;
    if (result < 0){
        alert('no te pases de verdura');
        output.innerHTML = 0;
    }else{
        output.innerHTML = result;
    }
})