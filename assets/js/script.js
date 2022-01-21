/*Décarations Variables*/
let sections = document.getElementsByTagName('section');
let articles = document.getElementsByTagName('article')
let title = document.getElementsByTagName('h1');
console.log(articles)
/*Fonctions*/
function emptyContent() {
    sections[0].innerHTML = '';
}
/**
 * Function that reset content of html
 */
function resetContent() {
    body[0].classList.remove('rainbow');
    emptyContent();
    title[0].innerHTML = 'Exercices_Javascript';
    sections[0].innerHTML = `<article class="rainbow">
                                <img src="./assets/img/MLP1.jpg" alt="My Little Pony">
                                <p>Friendship is Magic</p>
                            </article>
                            <article>
                                <img src="./assets/img/Clock.jpg" alt="Clock">
                                <p>L'Horloge</p>
                            </article>
                            <article>
                                <img src="./assets/img/fizzbuzz.png" alt="fizzbuzz">
                                <p>FizzBuzz</p>
                            </article>
                            <article>
                                <img src="./assets/img/fizzbuzz ++.png" alt="fizzbuzz++">
                                <p>FizzBuzz ++</p>
                            </article>
    `;
    articles[0].addEventListener('click',generatePonys);
    articles[1].addEventListener('click',generateHorloge);
    articles[2].addEventListener('click',generateFizz);
    articles[3].addEventListener('click',generateBuzz);
}

/*Domcontent Loaded/Events Listeners*/