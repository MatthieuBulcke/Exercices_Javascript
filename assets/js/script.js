/*Décarations Variables*/
let sections = document.getElementsByTagName('section');
let articles = document.getElementsByTagName('article')
let title = document.getElementsByTagName('h1'); 
console.log(articles)
/*Fonctions*/
function emptyContent(){
    sections[0].innerHTML = '';
}

function resetContent(){
    emptyContent();
    title[0].innerHTML = 'Exercices_Javascript';
}

/*Domcontent Loaded/Events Listeners*/