// last child (ol) and put it at the beginning of the list
// const myol = document.querySelector('ol');
// const olChildren = myol.children;
// let l = myol.children[4];
// let b = myol.children[0];
// b.appendChild(l);

// console.log(ol);
// console.log(olChildren);
// console.log(l);
// console.log(b);
// console.log(b.childNodes)

// Move the <h2> of the third section in the second one and vice-versa
//  const section2 = document.querySelector('section:nth-child(2)');
//  const section3 = document.querySelector('section:nth-child(3)');
//  const scH2 = section2.children[0];
//  const thdH2 = section3.children[0].children[0];
// //  scH2.appendChild(thdH2);
// //  thdH2.appendChild(scH2);
// //  scH2.replaceChild(scH2,thdH2);
// // thdH2.replaceChild(thdH2,scH2);

//  console.log(section2);
//  console.log(section3);
//  console.log(scH2);
//  console.log(thdH2);

const main = document.querySelector('main');
const thdSection = main.children[2];
const secondSection = main.children[1];
main.firstElementChild.appendChild(thdSection);
main.appendChild(secondSection);
const test =  main.firstElementChild; 
console.log(main);
console.log(thdSection);
console.log(secondSection);
console.log(test);

// Delete the last section from the DOM, we don't need it anyways;

// const allSections = document.querySelectorAll('section')
// const listall = document.querySelector('main');
// // allSections[2].remove();
// listall.removeChild(allSections[2]);
// console.log(allSections);
// console.log(listall);