// for the navbar
const navBtn=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
navBtn.addEventListener('click',function(){
links.classList.toggle('show-links');
});

// for buttons
const enter=document.getElementById('proceed-btn');
const resetBtn=document.getElementById('reset-btn');

// for enter button activity
enter.addEventListener('click',function(){
let str=document.getElementById('user-input').value;
upperCase(str);
});

//function for the upperCase
function upperCase(cont){
    // alert('Are you sure to submit this sentence:- '+cont);
    let result=cont.toUpperCase();
    const mainRes=document.querySelector('.main-res'); //locally declared variable
    mainRes.textContent=result;
};

//for reset button activity
resetBtn.addEventListener('click',function(){
document.getElementById('user-input').value='';
document.querySelector('.main-res').textContent=''; // this is the major point which i found difficult in this project
});
