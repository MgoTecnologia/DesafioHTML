let cadastro = document.getElementById('cadastro');
cadastro.hidden = true;
function salvar(){
    cadastro.hidden = false;

    let nome = document.getElementById('nome');        
    let exibirNomeCompleto = document.getElementById('exibirNomeCompleto');
    exibirNomeCompleto.innerHTML = nome.value;

    let endereco = document.getElementById('endereco');
    let exibirEndereco = document.getElementById('exibirEndereco');
    exibirEndereco.innerHTML = endereco.value;
    
    let bairro = document.getElementById('bairro');
    let exibirBairro = document.getElementById('exibirBairro');
    exibirBairro.innerHTML = bairro.value;

    let cidade = document.getElementById('cidade');
    let exibirCidade = document.getElementById('exibirCidade');
    exibirCidade.innerHTML = cidade.value;

    let estado = document.getElementById('estado');
    let exibirEstado = document.getElementById('exibirEstado');
    exibirEstado.innerHTML = estado.value;

    let cep = document.getElementById('cep');
    let exibirCEP = document.getElementById('exibirCEP');
    exibirCEP.innerHTML = cep.value;

    let telefone = document.getElementById('telefone');
    let exibirTelefone = document.getElementById('exibirTelefone');
    exibirTelefone.innerHTML = telefone.value;

    alert(nome.value);
}

function limpar(){
    cadastro.hidden = true;
}