titulo.addEventListener("click", function(){
	alert("Quer emagrecer?");
	alert("Fume crack");
});

var botaoAddPaciente = document.querySelector('#adicionar-paciente');
botaoAddPaciente.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector('#form-add');

	var paciente = obtemPacienteFormulario(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensErro(erros);
		return;
	}
	
	addPacienteTabela(paciente);

	form.reset();
	var limpaErroMens = document.querySelector("#mensagens-erro");
	limpaErroMens.innerHTML = "";
	//alert("paciente adicionado");
});

function addPacienteTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);;
}

function obtemPacienteFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function exibeMensagensErro(erros){

	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}



function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if(paciente.nome.length == 0){
		erros.push('o nome não pode estar vazio!')
	}

	if(!validaPeso(paciente.peso) || paciente.peso.length == 0)
		erros.push('peso invalido!');

	if(!validaAltura(paciente.altura) || paciente.altura.length == 0)
		erros.push('altura invalida!');

	if(!validaGordura(paciente.gordura) || paciente.gordura.length == 0){
		erros.push('gordura invalida!')
	}

	return erros;
}
