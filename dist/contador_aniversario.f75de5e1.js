// Define a data e hora do evento
const dataDoEvento = new Date("May 31, 2025 17:00:00").getTime();
// Atualiza o contador a cada segundo
const intervalo = setInterval(()=>{
    const agora = new Date().getTime();
    const distancia = dataDoEvento - agora;
    // Cálculos de tempo
    const dias = Math.floor(distancia / 86400000);
    const horas = Math.floor(distancia % 86400000 / 3600000);
    const minutos = Math.floor(distancia % 3600000 / 60000);
    const segundos = Math.floor(distancia % 60000 / 1000);
    // Atualiza os elementos no HTML
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    // Verifica se o evento já ocorreu
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";
    // Opcional: exibir uma mensagem indicando que o evento ocorreu
    // document.getElementById("mensagem").textContent = "O evento já aconteceu!";
    }
}, 1000);

//# sourceMappingURL=contador_aniversario.f75de5e1.js.map
