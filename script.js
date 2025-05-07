const cursoGeral = document.getElementById('cursoGeral');
const cursoTurismo = document.getElementById('cursoTurismo');
const cursoMultimedia = document.getElementById('cursoMultimedia');
const geral = document.getElementById('geral');
const turismo = document.getElementById('turismo');
const multimedia = document.getElementById('multimedia');

let aberto = false;

cursoGeral.addEventListener('click', () => {
    if(aberto){
        geral.style.display = "none";
    } else {
        geral.style.display = "flex";
        geral.style.alignItems = "center";
        geral.style.flexDirection = "column";
    }
    aberto = !aberto;
})

cursoTurismo.addEventListener('click', () => {
    if(aberto){
        turismo.style.display = "none";
    } else {
        turismo.style.display = "flex";
        turismo.style.alignItems = "center";
        turismo.style.flexDirection = "column";
    }
    aberto = !aberto;
})

cursoMultimedia.addEventListener('click', () => {
    if(aberto){
        multimedia.style.display = "none";
    } else {
        multimedia.style.display = "flex";
        multimedia.style.alignItems = "center";
        multimedia.style.flexDirection = "column";
    }
    aberto = !aberto;
})
