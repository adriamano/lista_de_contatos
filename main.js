const form = document.getElementById('form-contatos')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
});

function adicionaLinha() {

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`

            linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

inputNome.value = '';
inputNumero.value ='';

};

