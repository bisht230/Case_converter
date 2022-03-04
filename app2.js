// for the navbar
const navBtn=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
navBtn.addEventListener('click',function(){
links.classList.toggle('show-links');
});

// for buttons
const enter=document.getElementById('proceed-btn');
const reset=document.getElementById('reset-btn');
let mainRes=document.querySelector('.main-res'); //if str changes then mainRes also changes
enter.addEventListener('click',function(){
let str=document.getElementById('user-input').value;
//   alert('Are you sure to submit this sentence:- '+str);
  const result=str.toLowerCase();
  mainRes.textContent=result;
//   alert(result); for checking the result

});
reset.addEventListener('click' , function(){
 document.getElementById('user-input').value=''; // reset the values to null 
 document.querySelector('.main-res').textContent='';
});