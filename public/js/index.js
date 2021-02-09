function buscarUsuario() {
    let id = document.getElementById("idusuario").value; // buscado o valor que foi preenchido no componente

    const url = "http://localhost:8080/usuario/id/" + id;

    fetch(url)
        .then(retorno => tratarRetorno(retorno)); // espera o retorno do fetch para continuar...

}

function tratarRetorno(ret) {
    if (ret.status == 200) {
        ret.json().then(usuario => exibirDados(usuario));
    } else {
        document.getElementById("dados").innerHTML = "Usuário não encontrado.";
    }
}

function exibirDados(dados) {
    let tela = `<b>ID:</b> ${dados.id} <b>NOME:</b> ${dados.nome} <b>E-mail:</b> ${dados.email}`;

    document.getElementById("dados").innerHTML = tela;
}

function listarTodos() {
    const url = "http://localhost:8080/usuario/all";

    fetch(url)
        .then(retorno => tratarRetornoTodos(retorno));
}

function tratarRetornoTodos(dados) {
    // assumindo que o retorno é sempre status 200
    dados.json().then(usuario => exibirLista(usuario));
}

function exibirLista(lista) {
    let tabela = '<table> <tr> <th>ID</th> <th>Nome</th> <th>E-mail</th> </tr>';

    for (let i = 0; i < lista.length; i++) {
        tabela = tabela + `<tr> <td>${lista[i].id}</td> <td>${lista[i].nome}</td> <td>${lista[i].email}</td> </tr>`
    }

    tabela += '</table>';

    document.getElementById("lista").innerHTML = tabela;
}