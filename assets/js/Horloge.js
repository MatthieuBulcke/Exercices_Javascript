/*Décarations Variables*/

/*Fonctions*/
function getTime(){
    let horloge = document.getElementsByClassName('horloge');
    let now = new Date();
    let h   = now.getHours();
    let m  = now.getMinutes();
    let s = now.getSeconds();
    if(h<10){
        h='0'+h;
    }
    if(m<10){
        m='0'+m;
    }
    if(s<10){
        s='0'+s;
    }
    horloge[0].innerHTML = `<p>${h}:${m}:${s}</p>`;
}

function generateHorloge(){
    emptyContent();
    title[0].innerHTML = 'Horloge';
    sections[0].innerHTML+="<article class='horloge'>";
    getTime();
    setInterval(() => {
        getTime();
    }, 1000);
}
/*Domcontent Loaded/Events Listeners*/
document.addEventListener('DOMContentLoaded', function() {
    articles[1].addEventListener('click',generateHorloge);
    title[0].addEventListener('click',resetContent);
});