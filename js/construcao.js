const dias = document.querySelectorAll("dias");
const horas = document.querySelectorAll("horas");
const minutos = document.querySelectorAll("minutos");
const segundos = document.querySelectorAll("segundos");

const anoAtual = new Date().getFullYear();

const novoAno = new Date(`Janeiro 1 $ {anoAtual + 1} 00:00:00`);

function atualizaTempo(){
    const tempoAtual = new Date();
    const diff = novoAno - tempoAtual;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    dias.innerHTML = d;
    horas.innerHTML = h < 10 ? '0' + h : h;
    minutos.innerHTML = m < 10 ? '0' + m : m;
    segundos.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(atualizaTempo, 1000)