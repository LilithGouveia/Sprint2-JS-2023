let dataLancamento = new Date("June 28, 2023 12:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick(){
    let agora = new Date().getTime();
    let t = dataLancamento - agora;

    if(t > 0){
        let dias =  Math.floor(t / (1000 * 60 * 60 * 24));
        if(dias < 10){
            dias = "0" + dias;
        }

        let horas = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(horas < 10){
            horas = "0" + horas;
        }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if(mins < 10){
            mins = "0" + mins;
        }

        let segs = Math.floor((t % (1000 * 60)) / 1000);
        if(segs < 10){
            segs = "0" + segs;
        }

        let tempo = `${dias} : ${horas} : ${mins} : ${segs}`

        document.querySelector(".contagem").innerText = tempo;
    }
}