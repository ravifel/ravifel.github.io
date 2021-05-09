function enviarAlert() {

    var envioAlert = document.getElementById("concluir");


    var email = {
        fname: document.getElementById("fname").value,
        fexame: document.getElementById("fexame").value,
        ldate: document.getElementById("ldateExame").value,
        fmail: document.getElementById("fmail").value,
        lhora: document.getElementById("lhora").value,
        }

    emailjs.send("service_3t9jqvu","template_wfi6biw", email);


    envioAlert = alert("Concluido! Aguarde um e-mail de confirmação.");

    

}


function reloadPag() {
    window.location.reload();
}