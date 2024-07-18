window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI );
}

function calculateBMI(){
    const height = document.querySelector('#Height').value;
    const weight = document.querySelector('#Weight').value;
    const result = document.querySelector('#result');


    if(!height || isNaN(height) || height < 0){
        result.innerText = "please provide a valid height";
        return;

    }else if (!weight || isNaN(weight) || weight < 0){ 
           result.innerText = "Please provide a valid weight";
           return;
    }
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    if(bmi < 18.5) {
        result.innerText = `Under weight: ${bmi}`;
    }else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal weight: ${bmi}`;
    }else if (bmi >= 25.0 && bmi < 29.9) {
        result.innerText = `Over weight: ${bmi}`;
    }else {
        result.innerText = `Obesity: ${bmi}`;
    }
}
