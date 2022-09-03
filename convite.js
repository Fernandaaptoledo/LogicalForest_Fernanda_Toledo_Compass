
function VerificarEntrada() {
    NomeConvidado = documento.getElementById('nome').value;
    ConvidadosFernanda = ['Eduardo', 'Patricia', 'Denise', 'Karen', 'Douglas', 'Nosvaldo', 'Kelly', 'Junia']
    if (Convidadosfernanda.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}