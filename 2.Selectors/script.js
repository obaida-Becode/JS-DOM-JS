console.log (document.querySelector('.important'));
const test = document.querySelector('.important');
test.title = "new title";
console.log(test.tagName);

console.log(document.querySelector('.important:nth-child(1)'));
const test2 = document.querySelector('.important:nth-child(1)');
test2.title = "new title2";
console.log(test2.tagName);

console.log(document.querySelector('.important:last-child'))
const test3 = document.querySelector('.important:last-child');
test3.title = "image title";
console.log(test3.tagName);



  


const getParagph = document.querySelectorAll("p");
displayAllP = getParagph.length;

for ( i = 0; i < displayAllP; i++ ) {
    if(getParagph[i].classList.length ==0){
        console.log(getParagph[i].innerText);
    } else {
        console.log(getParagph[i].innerText);
        console.log(getParagph[i].className);
    }

};



//  const paragraphs = document.querySelectorAll('p');
//  console.log(paragraphs);
//  for(const p of paragraphs ){
//     //  console.log(p);
//     // if(p === p.className){
//     //   
//     //     // p.className.disply='block';
//     // }else{
//     //     console.log(p.disply='none')
//     // }
    
// };


// };