function formatarNome() {

    var nome = document.forms["formatação"]["nomeComp"].value;
     if (nome == "") {
         alert("Informe o nome completo: ");
         return false;

     }
     
      var nome = nome.split(" "); 
      var nomeAbnt = nome.pop().toUpperCase() + ", " + nome.shift()+ " ";  


      for (let index = 0; index < nome.length; index++){
          if (nome[index].length > 2){
            
              nomeAbnt += nome[index].charAt(0) + " ";  
          }
      }

      document.forms["formatação"]["nomeAbnt"].value = nomeAbnt;

    }