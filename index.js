const form = document.querySelector('form');
//this usecase will ive you empty value
//const hight = parseInt(document.querySelector('#hight').value)

form.addEventListener('submit', function(e){
  e.preventDefault()//it stop the function to perform | sumbmit krne se rokta h
  
  const A = document.querySelectorAll('.p1, .p2, .p3').forEach(p => {
    p.style.color = 'black';//so that multiple line will not highlight
  })


  const height = parseInt(document.querySelector('#height').value);//paresInt = convert the input into integer
  const weight = parseInt(document.querySelector('#weight').value);//.value = extract the value user will give 
  const results = document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height";
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight";
  }else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);//formula
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
      
      if(bmi < 18.6){
        const p1 = document.querySelector('.p1');
        p1.style.color = 'Red' ;
      }else if(18.6 < bmi && bmi < 24.9){
        const p2 = document.querySelector('.p2');
        p2.style.color = 'green' ;
      }else if(24.9 < bmi ){
        const p3 = document.querySelector('.p3');
        p3.style.color = 'red' ;
      }
  }
  
});

form.addEventListener('submit',function(e){
  e.preventDefault();

  const heightInInch =  parseInt(document.querySelector('#heightInInch').value);
  
  if(isNaN(heightInInch) || heightInInch < 0){
    ans.innerHTML = `<span>Please enter valid Height</span>`;
    return;
  }
  const centimeters = heightInInch * 30.48;
  const ans = document.querySelector('#ans');
  ans.innerHTML = `<span>${centimeters.toFixed(2)} cm</span>`

});
