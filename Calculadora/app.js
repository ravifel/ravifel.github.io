
function calculaSoma() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");


    if(valor1 == "" || valor2 == "") {
        return false;
    }



    resultado.value = valor1 + " + " + valor2 + " = " + (valor1 + valor2);

}

function calculaSub() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");

    if(valor1 > valor2) {
        resultado.value = valor1 + " - " + valor2 + " = " + (valor1 - valor2);
    }else {
        resultado.value = valor2 + " - " + valor1 + " = " + (valor2 - valor1);
    }



}

function calculaMult() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");

    resultado.value = valor1 + " x " + valor2 + " = " + (valor1 * valor2);

}

function calculaDiv() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");

    resultado.value = valor1 + " / " + valor2 + " = " + (valor1 / valor2);
}

