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

// ************************
//  q2;

 const imgAll = document.querySelectorAll('img');


    for (const iterator of imgAll) {
        if(!iterator.classList.contains('important')){
            iterator.style.display= 'none';
        }
    }

 //  ***************************************** q3


const allP = document.querySelectorAll('p');
for (let index = 0; index < allP.length; index++) {
    const element = allP[index];
    // console.log(element);
    if(element.className.length===0){
        console.log(element.innerText)
    }else{
        console.log(element.innerText);
        console.log(element.className);
    }

}


    
 // ***************************
 //q4 


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




// ********************************
// 1-give each of the paragraphe random text color 

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


for (let index = 0; index < allP.length; index++) {
    const element = allP[index];
    console.log(allP[index]);
    
    if(!element.className ){
        console.log(element.className)
        element.style.backgroundColor = getRandomColor();
    }
};


