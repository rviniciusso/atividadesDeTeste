function validarToken(token, tempo){
    if( token === "" || !token ){
        return "TOKEN_AUSENTE";
    };
    if(tempo <= 0){
        return "SESSAO_EXPIRADA";
    };
    return "SESSAO_ATIVA";
}

// suite de teste


// teste 1 caminho feliz(token valido e tempo ativo)
if(validarToken("token", 20)){
    console.log("SESSAO_ATIVA");
}else{
    console.log("SESSAO_INATIVA");
}

// teste 2 token ausente
if(validarToken("", 20)){
    console.log("SESSAO_INATIVA");
}else{
    console.log("SESSAO_ATIVA");
}

// teste 3 tempo expirado
if(validarToken("token", 0)){
    console.log("SESSAO_INATIVA");
}else{
    console.log("SESSAO_ATIVA");
}


function validarFrete(regiao, peso){
    let taxaRegiao = 25;
    let taxaPeso = 5;
    let frete = 0;
    if(peso <= 0){
        return "peso_invalido";
    }
    if(regiao === "ba"){
        taxaRegiao = 10;
        taxaPeso = 2;
    }
    if(peso >= 1){
        frete = taxaRegiao + (taxaPeso * peso);
    }
    if(peso > 20){
        frete = frete + 50
    }
    return "frete";
}

//suite de testes


//teste 1 caminho feliz(regiao MT e peso 10)
if(validarFrete("MT", 10) === "frete"){
    console.log("Frete contabilizado");
}else{
    console.log("Peso inválido");
}

//teste 2 peso inválido
if(validarFrete("ba", 0) === "frete"){
    console.log("Frete contabilizado");
}else{
    console.log("Peso inválido");
}

//teste 3
if(validarFrete("ba", 30) === "frete"){
    console.log("Frete contabilizado");
}else{
    console.log("Peso inválido");
}

function formatarCpf(cpf){
    if(!cpf){ return "CPF_INVALIDO"};

    let cpfLimpo = cpf.replaceAll(".", "").replaceAll("-", "");
    
    if(cpfLimpo.lenght > 11 || isNaN(cpfLimpo)){
        return "CPF_INVALIDO";
    }

    return "cpfLimpo";
}

//suite de testes

//teste 1 caminho feliz(cpf valido)
if(formatarCpf("123.456.789-00") === "cpfLimpo"){
    console.log("CPF_CADASTRADO")
}else{
    console.log("CPF_INVALIDO")
}

//teste 2 numero a mais
if(formatarCpf("123.456.789-002") === "cpfLimpo"){
    console.log("CPF_INVALIDO")
}else{
    console.log("CPF_CADASTRADO")
}

//teste 3 sem pontuacao
if(formatarCpf("12345678900") === "cpfLimpo"){
    console.log("CPF_CADASTRADO")
}else{
    console.log("CPF_INVALIDO")
}