// new section with random background color;
const value = document.querySelector('article');
const section = document.createElement("section");
const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const group = [
    "Benyamin",
    "Munise",
    "Jiacinto",
    "Anna",
    "Younnes",
    "Hanna",
    "Arseniia",
    "Audric",
    "Diego",
    "Harold",
    "Mathieu",
    "Nicolas",
    "Hassan",
    "Egide",
    "Nadège",
    "Yurii",
    "Kübra",
    "Pranavi",
    "Gaël",
    "Carmen",
    "Youssef",
    "Zakaria",
    "Edouard",
    "Prathima",
    "Daria",
    "Aurore",
    "Estime",
    "Andrii",
    "Kawtar",
  ];
// create pragraphe
// var randomColor = Math.floor(Math.random()*16777215).toString(16);

// const paragraphs = document.createElement("p");
// const paragraphs = document.createElement("p");
// document.body.section.innerHTML="<p>"
// document.body.appendChild(section);
for (let index = 0; index < group.length; index++) {
    const element = group[index];
    const section = document.createElement("section");
    section.innerHTML = `<p>${element}<p>`;
    section.style.backgroundColor=getRandomColor();
    value.append(section);
    
}
console.log(section);
