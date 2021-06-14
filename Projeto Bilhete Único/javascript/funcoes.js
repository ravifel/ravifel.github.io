function enviarAlert() {

    var envioAlert = document.getElementById("concluir");
    //Aqui ele vai no botão concluir, pelo ID


    //Esses ifs vão checar se os campos estão diferentes de vazio
    if (document.getElementById("fname").value != "" &&
        document.getElementById("fsobrenome").value != "" &&
        document.getElementById("femail").value != "" &&
        document.getElementById("fddd").value != "" &&
        document.getElementById("ftelefone").value != "") {

            //Se estiverem vazios, ele vai pegar o value que tem dentro deles e vai atribuir
            //dentro das variaveis a seguir

        var email = {
            fname: document.getElementById("fname").value,
            fsobrenome: document.getElementById("fsobrenome").value,
            fendereco: document.getElementById("fendereco").value,
            fcidade: document.getElementById("fcidade").value,
            ftelefone: document.getElementById("ftelefone").value,
            fddd: document.getElementById("fddd").value,
            femail: document.getElementById("femail").value,
        }

        //Após isso ele vai enviar um email para o email do usuario via "EMAIL JS"
        //A variavel email, vai importar todas as informações que foram atribuidas a variavel
        //para o serviço do "EMAIL JS"

        emailjs.send("service_3t9jqvu", "template_zllv4cp", email);

        //Após isso ele vai gerar um alerte pedindo para o usuario ir checar o seu email
        envioAlert = alert("Cadastro Concluido com Sucesso! Verifique seu e-mail e siga todas as instruções.");

        //Aqui ele vai recarregar a pagina, deixando ela com os campos em brano novamente
        window.location.reload();
        


        //Aqui esse encaiamento de Ifs e Else irá checar se o campo esta em branco e
        //emitir uma mensagem pedindo para que ele seja preenchido corretamente.
    } else if(document.getElementById("fname").value == ""){
        envioAlert = alert("Campo nome deve ser prenchido corretamente.");

    }else if(document.getElementById("fsobrenome").value == ""){
        envioAlert = alert("Campo sobrenome deve ser prenchido corretamente.");

    }else if(document.getElementById("femail").value == ""){
        envioAlert = alert("Campo email deve ser prenchido corretamente.");

    }else if(document.getElementById("fddd").value == ""){
        envioAlert = alert("Campo ddd deve ser prenchido corretamente.");

    }else if(document.getElementById("ftelefone").value == ""){
        envioAlert = alert("Campo telefone deve ser prenchido corretamente.");
    }
}


