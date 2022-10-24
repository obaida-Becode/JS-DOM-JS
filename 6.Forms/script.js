// add keyup listener on the first input 
const keyBoard = document.getElementById("firstname");
const ex1 = (e)=>{
const span = document.getElementById('display-firstname')
span.innerText=e.target.value
}

keyBoard.addEventListener('keyup', ex1)

// console.log(keyBoard);

// Q2 ***
// input age ;
const secondKey = document.getElementById('age');
let message = document.getElementById("a-hard-truth")
const ex2 = (e)=>{
  
    let age =e.target.value  ;
    if (age >= 18) {
       message.style.visibility = "visible";
    }else{
        message.style.visibility = "hidden";
    }
    
}
secondKey.addEventListener('keyup', ex2);
 
// Q3*****
// add hint  for tow fildes;
const pwd = document.getElementById('pwd') ;
const pwdConfirm = document.getElementById("pwd-confirm");

const ex3 = (e) => {
    
    if (pwd.value.length <= 6) {
        pwd.style.background = 'red'
        }else{
            pwd.style.backgroundColor = 'green'
        }

    if (pwdConfirm.value != pwd.value ){
        pwdConfirm.style.backgroundColor = 'red'
    }else{
        pwdConfirm.style.backgroundColor = 'green'
    }    
}
pwd.addEventListener('keyup', ex3);
pwdConfirm.addEventListener('keyup',ex3);

// Q4;
//  change event listener for toggle between dark mode and light mode on the whole page;
const body = document.querySelector('body');
const option = document.querySelector("option");

const select = document.querySelector("#toggle-darkmode"); 
const nightMood = (e) => {
 if(option.value === "dark"){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = "white"
 }

}
body.addEventListener('change',nightMood);