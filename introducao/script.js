
// questao 1 -------------------------------------------------------------
function validarCad(usuario) {
    if (usuario.nome.length < 3) {
        return "Dados Inválidos";
    }
    if (usuario.idade < 18) {
        return "Dados Inválidos";
    }
    if (!usuario.email.includes("@")) {
        return "Dados Inválidos";
    }

    return "Cadastro ok";
}

let usuarioValido = { nome: "Roberto", idade: 20, email: "gmail@gmail.com" }
if (validarCad(usuarioValido) === "Cadastro ok") {
    console.log("Cadastrado")
} else {
    console.log("Erro no cadastro")
}

let usuarioInvalido = { nome: "Roberto", idade: 10, email: "gmail@gmail.com" }
if (validarCad(usuarioInvalido) === "Cadastro ok") {
    console.log("Cadastrado")
} else {
    console.log("Erro no cadastro")
}

// questao 2 -------------------------------------------------------------

function somarPrecos(itens) {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total = total + itens[i];
    }
    if (total > 100) {
        total = total * 0.90;
    }
    return total;
}

//soma valida
if (somarPrecos([30, 50, 40]) === 108) {
    console.log("Desconto aplicado");
} else {
    console.log("Desconto não aplicado");
}

//soma invalida
if (somarPrecos([50, 40]) === 90) {
    console.log("Desconto não aplicado");
} else {
    console.log("Desconto aplicado");
}

// questao 3 -------------------------------------------------------------

function contarEstoque(item, categoriaBuscada) {
    let contador = 0;

    for (let i = 0; i < item.length; i++) {
        if (item[i].categoria === categoriaBuscada) {
            contador++;
        }
    }
    return contador;
}

let estoque = [
    { nome: "TV", categoria: "eletronico" },
    { nome: "Celular", categoria: "eletronico" },
    { nome: "Pote", categoria: "utensilio" },
    { nome: "RAM", categoria: "hardware" },
]

//return certo
if (contarEstoque(estoque, "eletronico") === 2) {
    console.log("Teste passou");
} else {
    console.log("Teste não passou");
}

//return errado
if (contarEstoque(estoque, "hardware") === 2) {
    console.log("Teste não passou");
} else {
    console.log("Teste passou");
}