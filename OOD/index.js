function armazenClient(){
    let DadosdoCliente;
    let NameC = document.getElementById("nameClienteForm").value;
    let EmailC = document.getElementById("emailClienteForm").value;
    let YearsC = document.getElementById("oldClienteForm").value;
    let GenderC = document.getElementById("genderClienteForm").value;
    let cpfC = document.getElementById("cpfClienteForm").value;
    
    if(Validate(NameC , EmailC) ==true){
        
    }
    
    else if( ValidateCPF(cpfC)==false){
        alert("CPF Inválido");
        return;
    }


}

function Validate(n,e){
    if ((n == "") || (e == "")) {
        alert("Algum campo obrigatório está vazio");
        return false;
    }
    else{
        return true;
    }

}

function ValidateCPF(c){
    if(c.length == 11){
        let firstValidation = loopCPF(c,9);
        let secondValidation =  loopCPF(c,10);

        console.log(firstValidation);
        console.log(secondValidation);

        return true;
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

