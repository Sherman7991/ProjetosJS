function armazenClient(){
    let DadosdoCliente;
    let NameC = document.getElementById("nameClienteForm").value;
    let EmailC = document.getElementById("emailClienteForm").value;
    let YearsC = document.getElementById("oldClienteForm").value;
    let GenderC = document.getElementById("genderClienteForm").value;
    let cpfC = document.getElementById("cpfClienteForm").value;
    
    if(Validate(NameC , EmailC) === 0){
        alert("Nome ou email Inválido")
        console.log(Validate(NameC , EmailC));
        return;
    }    
    else if( ValidateCPF(cpfC)==0){
        alert("CPF Inválido");
        return;
    }


}

function Validate(n,e){
    if ((n == "") || (e == "")) {
        alert("Algum campo obrigatório está vazio");
        return 0;
    }
    else{
        return 1;
    }

}

function ValidateCPF(c){
    if(c.length == 11){
        let firstValidation = loopCPF(c,9);
        let secondValidation =  loopCPF(c,10);
        

        if(firstValidation ==c[9] && secondValidation == c[10]){
            alert("CPF Correto");
            return 1;
        }
        else{
            alert("CPF Incorreto");
            return 0;
        }

    }
    else{
        return false;
    }

}

function loopCPF(cpfN,lenghtNumber){
    let resultVali = 0;
    let multiCPF;
    let restResult;

    for(i=0; i<lenghtNumber;i++){
        multiCPF = cpfN[i] * (lenghtNumber - i +1);
        resultVali = resultVali + multiCPF;        
    }

    restResult = 11 - (resultVali%11);
    return restResult;

}


function clearForm(){

}

