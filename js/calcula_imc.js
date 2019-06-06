var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector('.info-peso');
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector('.info-altura');
	var altura = tdAltura.textContent;

	var tdGordura = paciente.querySelector('.info-gordura');
	var gordura = tdGordura.textContent;

	var imcCalc = calculaImc(peso, altura);

	var tdIMC = paciente.querySelector('.info-imc');
	var imc = tdIMC.textContent = imcCalc;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		tdIMC.textContent = 'Peso Invalido';
		paciente.classList.add("paciente-invalido-P");
	}

	if(!alturaEhValida){
		tdIMC.textContent = 'Altura Invalido';
		paciente.classList.add("paciente-invalido-A");
	}
}

function calculaImc(peso, altura){
	var imcCal = 0;

	imcCal = peso / (altura * altura);

	return imcCal.toFixed(2);
}

function validaPeso(peso){
	if(peso <= 10 || peso >= 600){
		return false;
	}else{
		return true;
	}
}

function validaAltura(altura){
	if(altura >= 0.50 && altura <= 3){
		return true;
	}else{
		return false;
	}
}

function validaGordura(gordura){
	if(gordura >= 0 && gordura <= 100){
		return true;
	}else{
		return false;
	}
}
