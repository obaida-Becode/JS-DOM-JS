const wrapDiv = document.querySelector('.actionsquare-wrapper');
const green = document.querySelector('.actionsquare.green');
const violet = document.querySelector('.actionsquare.violet');
const orange = document.querySelector('.actionsquare.orange');
/*
const getElapsedTime = () => {
    return  Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const _initTime = Date.now()
console.log(_initTime)
*/

green.addEventListener('click', (e) => {
const newDiv = document.createElement('div');
newDiv.className = "actionsquare green"
wrapDiv.appendChild(newDiv)
newDiv.addEventListener('click', (e) => {
  alert('green');
})

if(green){
  const time = new Date();
  let second = time.getSeconds()/100;
  const ul = document.querySelector('ul');
  const list = document.createElement('li');
  list.innerHTML =`[${second}]s`+ ' Created new green square'
  ul.appendChild(list)

}
})

 violet.addEventListener('click', (e) => {
  newDiv = document.createElement('div');
  newDiv.className = "actionsquare violet"
  wrapDiv.appendChild(newDiv)
    newDiv.addEventListener('click' , (e) => {
      alert('violet')

    })

    if(violet){
      time = new Date();
      second = time.getSeconds()/100;
      const ul = document.querySelector('ul');
      const list = document.createElement('li');
      list.innerHTML = `[${second}]s`+ ' Created new violet square'
      ul.appendChild(list)
    }
 })

  orange.addEventListener('clike', (e) => {
  newDiv = document.createElement('div');
  newDiv.className = "actionsquare orange"
  wrapDiv.appendChild(newDiv)
  newDiv.addEventListener('click', (e) => {
    alert ('orange')
  })
  if(orange){
    time = new Date;
    second=time.getSeconds()/100;
    ul = document.querySelector('ul')
    list = document.querySelector('li')
    list.innerHTML = `[${second}]s`+ 'created new orange square'
    ul.appendChild(list);
  }
 })

 








const clickOnSquare = (e) => {
  console.log(e.target.classList[1])

  
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}





// document.querySelector(".actionsquare-wrapper").addEventListener("click" , clickOnSquare);
// console.log(document.querySelector(".actionsquare-wrapper").addEventListener("click" , clickOnSquare)
// );






  






