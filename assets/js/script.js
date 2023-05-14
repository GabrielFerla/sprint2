
function validarFormulario() {
    // Recupera os valores dos campos do formulário
    var nome = document.forms["meuFormulario"]["nome"].value;
    var email = document.forms["meuFormulario"]["email"].value;
    var telefone = document.forms["meuFormulario"]["telefone"].value;
    
    // Verifica se o campo nome foi preenchido
    if (nome == "") {
        alert("Por favor, preencha o campo nome.");
        return false;
    }
    
    // Verifica se o campo email foi preenchido e se é um endereço de email válido
    if (email == "") {
        alert("Por favor, preencha o campo email.");
        return false;
    } else {
        // Expressão regular para validar um endereço de email
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert("Por favor, informe um endereço de email válido.");
            return false;
        }
    }
    
    // Verifica se o campo telefone foi preenchido e se contém apenas números
    if (telefone == "") {
        alert("Por favor, preencha o campo telefone.");
        return false;
    } else {
        // Expressão regular para validar um número de telefone
        var re = /^\d+$/;
        if (!re.test(telefone)) {
            alert("Por favor, informe um número de telefone válido.");
            return false;
        }
    }
}
