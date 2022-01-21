/*Décarations Variables*/
let index = 0;


/*Fonctions*/
/**
 * Function tha create a table with 100 numbers where multiple of 3 are fizz / multiple of 5 are buzz and multiple of both are fizzbuzz
 */
function generateFizz(){
    emptyContent();
    title[0].innerHTML = 'Fizz';
    sections[0].innerHTML+="<article class='fizz'>";
    let fizz = document.getElementsByClassName('fizz');
    for(let i = 0;i <= 100;i++){
        if(i % 15 == 0){
            fizz[0].innerHTML+=`<p class='both'>${i}</p>`;
        }
        else if(i % 3 == 0){
            fizz[0].innerHTML+=`<p class='fizzed'>${i}</p>`;
        }
        else if(i % 5 == 0){
            fizz[0].innerHTML+=`<p class='buzzed'>${i}</p>`;
        }
        else{
            fizz[0].innerHTML+=`<p>${i}</p>`;
        } 
    }
    generateLegend();
}
/**
 * Same function as generateFizz but hide every but one number
 */
function generateBuzz(){
    emptyContent();
    title[0].innerHTML = 'FizzBuzz + +';
    sections[0].innerHTML+="<article class='buzz'>";
    let buzz = document.getElementsByClassName('buzz');
    buzz[0].innerHTML += "<span class='previous'><i class='fas fa-chevron-left'></i></span>";
    for(let i = 0;i <= 100;i++){
        if(i % 15 == 0){
            buzz[0].innerHTML+=`<p class='both hide'>${i}</p>`;
        }
        else if(i % 3 == 0){
            buzz[0].innerHTML+=`<p class='fizzed hide'>${i}</p>`;
        }
        else if(i % 5 == 0){
            buzz[0].innerHTML+=`<p class='buzzed hide'>${i}</p>`;
        }
        else{
            buzz[0].innerHTML+=`<p class='hide'>${i}</p>`;
        }
    }
    buzz[0].innerHTML += "<span class='next'><i class='fas fa-chevron-right'></i></span>";
    let p = document.getElementsByTagName('p');
    p[index].classList.remove('hide');
    generateLegend();
    activateCarousel();
}
/**
 * Function that build legend to see if the number is fizz buzz or fizzbuzz
 */
function generateLegend(){
    sections[0].innerHTML+="<article class='legend'>";
    let legend = document.getElementsByClassName('legend');
    legend[0].innerHTML = `
        <p class='fizzed'>Fizz</p>
        <p class='buzzed'>Buzz</p>
        <p class='both'>FizzBuzz</p>
    `;
}
/**
 * Function that activate arrows for carousel
 */
function activateCarousel(){
    let previousButton = document.getElementsByClassName('previous');
    let nextButton = document.getElementsByClassName('next');
    previousButton[0].addEventListener('click',previous);
    nextButton[0].addEventListener('click',next);
}
/**
 * function that hide all numbers
 */
function hideAll(){
    let buzz = document.getElementsByClassName('buzz');
    let p = buzz[0].getElementsByTagName('p');
    for(let i = 0;i<p.length;i++){
        p[i].classList.add('hide');
    }
}
/**
 * function that get previous number in carousel
 */
function previous(){
    let buzz = document.getElementsByClassName('buzz');
    let p = buzz[0].getElementsByTagName('p');
    if(index>0){
        hideAll();
        index--;
        p[index].classList.remove('hide');
    }
}
/**
 * function tha get next number in carousel
 */
function next(){
    let buzz = document.getElementsByClassName('buzz');
    let p = buzz[0].getElementsByTagName('p');
    if(index<100){
        hideAll();
        index++;
        p[index].classList.remove('hide');
    }
}
/*Domcontent Loaded/Events Listeners*/
document.addEventListener('DOMContentLoaded', function() {
    articles[2].addEventListener('click',generateFizz);
    articles[3].addEventListener('click',generateBuzz);
    title[0].addEventListener('click',resetContent);
});