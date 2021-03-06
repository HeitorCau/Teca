try {
  let nomeInput = document.getElementById("nome");
  let senhaInput = document.getElementById('senha');
  let mensagemErro = document.getElementById('mensagemErro');

  document.getElementById("form-login").onsubmit = function (e) { e.preventDefault(); validateLogin(nomeInput.value, senhaInput.value); }

  function validateLogin(namePar, passwordPar) {

    let users = [
      { "name": "Heitor", "password": "88116", "role": "adm" },
      { "name": "José", "password": "89295", "role": "adm" },
      { "name": "Leandro", "password": "88768", "role": "adm" },
      { "name": "Lucas", "password": "86696", "role": "adm" },
      { "name": "Vinicius", "password": "87985", "role": "adm" },
      { "name": "Cliente", "password": "cliente", "role": "client" }
    ];

    let erro = "";

    for (var i = 0; i < users.length; i++) {
      if (users[i].name == namePar && users[i].password == passwordPar) {
        if (users[i].role == "adm") {
          return window.location.href = "dashboard.html";
        } else {
          return window.location.href = "venda.html";
        }
      } else if (users[i].name != namePar) {
        erro = "Nome de usuário incorreto";
      } else {
        erro = "Senha incorreta";
        break;
      }
    }
    mensagemErro.innerHTML = erro;
  }

} catch (e) { }

try {

  let numero = document.getElementById('numeroCartao');
  let nome = document.getElementById('nomeCartao');
  let cvv = document.getElementById('cvvCartao');
  let validade = document.getElementById('validadeCartao');

  let formPagamento = document.getElementById('form-pagamento');

  formPagamento.onsubmit = function (e) { e.preventDefault(); verificarCamposPagamento(nome, nomeErro, numero, numeroErro, validade, validadeErro, cvv, cvvErro); }

  numero.onkeyup = function () { infoCartaoNumero(numero, numeroCartaoVisual, numeroErro) }

  nome.onkeyup = function () { infoCartaoNome(nome, nomeCartaoVisual, nomeErro) }

  cvv.onkeyup = function () { infoCartaoCvv(cvv, cvvCartaoVisual, cvvErro) }

  validade.onkeyup = function () { infoCartaoValidade(validade, validadeCartaoVisual, validadeErro) }

  let numeroCartaoVisual = document.getElementById('numeroCartaoVisual');
  let nomeCartaoVisual = document.getElementById('nomeCartaoVisual');
  let cvvCartaoVisual = document.getElementById('cvvCartaoVisual');
  let validadeCartaoVisual = document.getElementById('validadeCartaoVisual');

  let numeroErro = document.getElementById('numero-erro');
  let nomeErro = document.getElementById('nome-erro');
  let validadeErro = document.getElementById('validade-erro');
  let cvvErro = document.getElementById('cvv-erro');

  function infoCartaoNumero(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\D+/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})\d+?$/, '$1');

    if (campo.value.length == 0) {
      campoCartao.innerHTML = "0000 0000 0000 0000";
      campoErro.innerHTML = "Insira o número do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }
  }

  function infoCartaoNome(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\d+/g, '');
    if (campo.value.length == 0) {
      campoCartao.innerHTML = "Jhon Doe";
      campoErro.innerHTML = "Insira o nome no cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }
  }

  function infoCartaoValidade(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1');

    if (campo.value.length == 0) {
      campoCartao.innerHTML = "12/21";
      campoErro.innerHTML = "Insira a validade do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }

  }

  function infoCartaoCvv(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value.replace(/\D+/g, '');
    if (campo.value.length == 0) {
      campoCartao.innerHTML = "123";
      campoErro.innerHTML = "Insira o código de validação do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }

  }

  function verificarCamposPagamento(nome, nomeErro, numero, numeroErro, validade, validadeErro, cvv, cvvErro) {
  let erro = 0;
    if (nome.value.length == 0) {
      erro++;
      nomeErro.innerHTML = "Insira o nome no cartão";
    }

    if (numero.value.length == 0) {
      erro++;
      numeroErro.innerHTML = "Insira o número do cartão";
    }

    if (validade.value.length == 0) {
      erro++;
      validadeErro.innerHTML = "Insira a validade do cartão";
    }

    if (cvv.value.length == 0) {
      erro++;
      cvvErro.innerHTML = "Insira o código de validação do cartão";
    }

    if (erro == 0) {
      window.location.href="venda.html"
    }
  }

} catch (e) { }

try {

  let formClientes = document.getElementById('form-clientes');

  let razaoSocialOK = false;
  let cnpjOK = false;
  let nomeRepresentanteOK = false;
  let cpfRepresentanteOK = false;
  let cepOK = false;
  let logradouroOK = false;
  let numeroEnderecoOK = false;
  let bairroOK = false;
  let estadoOK = false;
  let cidadeOK = false;

  let razaoSocialInput = document.getElementById('razao-social');
  let cnpjInput = document.getElementById('cnpj');
  let nomeRepresentanteInput = document.getElementById('nome-representante');
  let cpfRepresentanteInput = document.getElementById('cpf-representante');
  let cepInput = document.getElementById('cep');
  let logradouroInput = document.getElementById('logradouro');
  let numeroEnderecoInput = document.getElementById('numero-endereco');
  let bairroInput = document.getElementById('bairro');
  let estadoInput = document.getElementById('estado');
  let cidadeInput = document.getElementById('cidade');

  let razaoSocialErro = document.getElementById('erro-razao-social');
  let cnpjErro = document.getElementById('erro-cnpj');
  let nomeRepresentanteErro = document.getElementById('erro-nome-representante');
  let cpfRepresentanteErro = document.getElementById('erro-cpf-representante');
  let cepErro = document.getElementById('erro-cep');
  let logradouroErro = document.getElementById('erro-logradouro');
  let numeroEnderecoErro = document.getElementById('erro-numero-endereco');
  let bairroErro = document.getElementById('erro-bairro');
  let estadoErro = document.getElementById('erro-estado');
  let cidadeErro = document.getElementById('erro-cidade');

  formClientes.onsubmit = function (e) { e.preventDefault(); validarCamposCliente(); }

  razaoSocialInput.onkeyup = function () {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    } else {
      razaoSocialErro.innerHTML = "";
      razaoSocialOK = true;
    }

  }

  logradouroInput.onkeyup = function () {

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    } else {
      logradouroErro.innerHTML = "";
      logradouroOK = true;
    }
  }

  numeroEnderecoInput.onkeyup = function () {

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    } else {
      numeroEnderecoOK = true;
      numeroEnderecoErro.innerHTML = "";
    }

  }

  bairroInput.onkeyup = function () {

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    } else {
      bairroOK = true;
      bairroErro.innerHTML = "";
    }

  }

  estadoInput.onkeyup = function () {

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    } else {
      estadoOK = true;
      estadoErro.innerHTML = "";
    }

  }

  cidadeInput.onkeyup = function () {

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma cidade";
    } else {
      cidadeOK = true;
      cidadeErro.innerHTML = "";
    }

  }

  function mascaraCnpj() {

    if (cnpjInput.value.length == 0) {
      cnpjErro.innerHTML = "Insira um CNPJ";
    } else {
      cnpjOK = true;
      cnpjErro.innerHTML = "";
    }

    cnpjInput.value = cnpjInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

  function mascaraNomeRepresentante() {

    if (nomeRepresentanteInput.value.length == 0) {
      nomeRepresentanteErro.innerHTML = "Insira o nome do representante ";
    } else {
      nomeRepresentanteOK = true;
      nomeRepresentanteErro.innerHTML = "";
    }

    nomeRepresentanteInput.value = nomeRepresentanteInput.value
      .replace(/\d+/g, '');

  }

  function mascaraCpf() {

    if (cpfRepresentanteInput.value.length == 0) {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    } else {
      cpfRepresentanteErro.innerHTML = "";
    }

    cpfRepresentanteInput.value = cpfRepresentanteInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

  function testarCpf() {
    let cpf = cpfRepresentanteInput.value.replace(/\D+/g, '');
    let soma = 0;
    let resto;

    if (!cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999") {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    }

    for (var i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
    }

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;
    }

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto == parseInt(cpf.substring(10, 11))) {
      cpfRepresentanteErro.innerHTML = "";
      cpfRepresentanteOK = true;
    } else {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    }

  }

  cnpjInput.onkeyup = function () { mascaraCnpj(); }
  cpfRepresentanteInput.onkeyup = function () { mascaraCpf(); }
  cepInput.onkeyup = function () { mascaraCep(); }
  cpfRepresentanteInput.onblur = function () { testarCpf(); }
  nomeRepresentanteInput.onkeyup = function () { mascaraNomeRepresentante(); }

  function mascaraCep() {

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    } else {
      cepOK = true;
      cepErro.innerHTML = "";
    }

    cepInput.value = cepInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

  }

  function validarCamposCliente() {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    }

    if (cnpjInput.value.length < 18) {
      cnpjErro.innerHTML = "Insira um CNPJ válido";
    }

    if (nomeRepresentanteInput.value.length == 0) {
      nomeRepresentanteErro.innerHTML = "Insira o nome do representante";
    }

    if (cpfRepresentanteInput.value.length == 0) {
      cpfRepresentanteErro.innerHTML = "Insira o CPF do representante";
    }

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    }

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    }

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    }

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    }

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    }

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma Cidade";
    }

    if (razaoSocialOK && cnpjOK && nomeRepresentanteOK && cpfRepresentanteOK && cepOK && logradouroOK && numeroEnderecoOK && bairroOK && estadoOK && cidadeOK) {
      window.location.href = "dashboard.html";
    }
  }

} catch (e) { }

try {

  let formFornecedores = document.getElementById('form-fornecedores');

  let razaoSocialOK = false;
  let cnpjOK = false;
  let cepOK = false;
  let logradouroOK = false;
  let numeroEnderecoOK = false;
  let bairroOK = false;
  let estadoOK = false;
  let cidadeOK = false;

  let razaoSocialInput = document.getElementById('razao-social');
  let cnpjInput = document.getElementById('cnpj');
  let cepInput = document.getElementById('cep');
  let logradouroInput = document.getElementById('logradouro');
  let numeroEnderecoInput = document.getElementById('numero-endereco');
  let bairroInput = document.getElementById('bairro');
  let estadoInput = document.getElementById('estado');
  let cidadeInput = document.getElementById('cidade');

  let razaoSocialErro = document.getElementById('erro-razao-social');
  let cnpjErro = document.getElementById('erro-cnpj');
  let cepErro = document.getElementById('erro-cep');
  let logradouroErro = document.getElementById('erro-logradouro');
  let numeroEnderecoErro = document.getElementById('erro-numero-endereco');
  let bairroErro = document.getElementById('erro-bairro');
  let estadoErro = document.getElementById('erro-estado');
  let cidadeErro = document.getElementById('erro-cidade');

  formFornecedores.onsubmit = function (e) { e.preventDefault(); validarCamposFornecedor(); }

  razaoSocialInput.onkeyup = function () {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira uma razão social";
    } else {
      razaoSocialErro.innerHTML = "";
      razaoSocialOK = true;
    }
  }

  logradouroInput.onkeyup = function () {

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    } else {
      logradouroErro.innerHTML = "";
      logradouroOK = true;
    }
  }

  numeroEnderecoInput.onkeyup = function () {

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    } else {
      numeroEnderecoOK = true;
      numeroEnderecoErro.innerHTML = "";
    }

  }

  bairroInput.onkeyup = function () {

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    } else {
      bairroOK = true;
      bairroErro.innerHTML = "";
    }

  }

  estadoInput.onkeyup = function () {

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    } else {
      estadoOK = true;
      estadoErro.innerHTML = "";
    }

  }

  cidadeInput.onkeyup = function () {

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma cidade";
    } else {
      cidadeOK = true;
      cidadeErro.innerHTML = "";
    }

  }

  function mascaraCnpj() {

    if (cnpjInput.value.length == 0) {
      cnpjErro.innerHTML = "Insira um CNPJ";
    } else {
      cnpjOK = true;
      cnpjErro.innerHTML = "";
    }

    cnpjInput.value = cnpjInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

  cnpjInput.onkeyup = function () { mascaraCnpj(); }
  cepInput.onkeyup = function () { mascaraCep(); }

  function mascaraCep() {

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    } else {
      cepOK = true;
      cepErro.innerHTML = "";
    }

    cepInput.value = cepInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

  }

  function validarCamposFornecedor() {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    }

    if (cnpjInput.value.length < 18) {
      cnpjErro.innerHTML = "Insira um CNPJ válido";
    }

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    }

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    }

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    }

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    }

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    }

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma Cidade";
    }

    if (razaoSocialOK && cepOK && logradouroOK && numeroEnderecoOK && bairroOK && estadoOK && cidadeOK) {
      window.location.href = "dashboard.html";
    } else {
      console.log(razaoSocialOK, cepOK, logradouroOK, numeroEnderecoOK, bairroOK, estadoOK, cidadeOK);
    }
  }

} catch (e) { }
