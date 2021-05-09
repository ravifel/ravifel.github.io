var totalMovimentos;

var iniciarJogo = function(totalDiscos)
{

    document.getElementById("jogo_log").innerHTML = '';
    document.getElementById("resultado_jogo").innerHTML = '';

    totalMovimentos = 0;

    // Primeiro pino da torre hanoi.
    var pinoInicial = '1';

    // Segundo pino da torre hanoi.
    var pinoAuxiliar = '2';

    // Ultimo pino da torre hanoi.
    var pinoFinal = '3';

    resolverTorre(totalDiscos, pinoInicial, pinoFinal, pinoAuxiliar);

    document.getElementById("resultado_jogo").innerHTML = '<b> Total de movimentos para resolver a torre hanoi: ' + totalMovimentos + '</b>';
    console.log('Total de movimentos para resolver a torre hanoi:  ' + totalMovimentos);
}

var resolverTorre = function (totalTorreDiscos, pinoInicialTorre, pinoFinalTorre, pinoAuxiliarTorre) {
    if (totalTorreDiscos > 0) {
        // Movendo o pino de A para C
        resolverTorre(totalTorreDiscos - 1, pinoInicialTorre, pinoAuxiliarTorre, pinoFinalTorre);

        totalMovimentos++;
        document.getElementById("jogo_log").innerHTML = document.getElementById("jogo_log").innerHTML + "<br>Movendo disco do pino " + pinoInicialTorre + " para o pino " + pinoFinalTorre;
        console.log("Movendo disco do pino " + pinoInicialTorre + " para o pino " + pinoFinalTorre);

        // Movendo o pino de A para C
        resolverTorre(totalTorreDiscos - 1, pinoAuxiliarTorre, pinoFinalTorre, pinoInicialTorre);
    }
}