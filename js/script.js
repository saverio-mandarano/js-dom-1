// Consegna

// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...


const lamp = document.getElementById(`lampOff`)
const btn = document.getElementById(`btnOnOff`);
console.log(lamp.src);

btn.addEventListener(`click`, function(){
    lightSwitcher(`white_lamp`,`yellow_lamp`);
});



function lightSwitcher (offImgName, onImgName){

    if (lamp.src.includes(offImgName)) {
        lamp.src = `img/${onImgName}.png`; 
        btn.innerHTML = `Spegni`;
    }
    else{
        lamp.src = `img/${offImgName}.png`;
        btn.innerHTML = `Accendi`;
    }

}

