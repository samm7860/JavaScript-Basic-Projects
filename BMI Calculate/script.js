const form=document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);         //convert received string value into integer
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML='Please Give a Valid height';
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML='Please Give a Valid height';
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=bmi;
    }
});