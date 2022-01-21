/*Décarations Variables*/

/*Fonctions*/

function generatePonys(){
    emptyContent();
    title[0].innerHTML = 'Les Tiponays'
    let ponys = ['Twilight Sparkle','Rarity','Fluttershy','Rainbow Dash','Pinkie Pie','Applejack','Spike','Celestia','Luna','Cadence','Starlight Glimmer','Sunset Shimmer'];
    sections[0].innerHTML+='<ul>';
    let lists = document.getElementsByTagName('ul');
    for(let i = 0;i<ponys.length;i++){
        lists[0].innerHTML+=`
            <li class='pony'>
                <figure>
                    <img src='./assets/img/ponys/${ponys[i]}.png'>
                    <figcaption>${ponys[i]}</figcaption>
                </figure>
            </li>
        `;
    }
    sections[0].innerHTML+='</ul>';
}

/*Domcontent Loaded/Events Listeners*/
document.addEventListener('DOMContentLoaded', function() {
    articles[0].addEventListener('click',generatePonys);
});