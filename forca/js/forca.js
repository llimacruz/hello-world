window.onload = function(){
	iniciar();
}

var palavra = "LEONARDO";
var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var tam;

function iniciar(){
	//palavra
	
	tam = palavra.length;
	document.querySelector("#texto").innerHTML = '';
	document.querySelector("#texto").className = 'alert alert-info';
	for(var i=0; i<tam; i++){
		document.querySelector("#texto").innerHTML+= '<input readonly="true" type="text" id="txtLetra' + i + '" size="3" />';
	}
	
	//letras
	document.querySelector("#letras").innerHTML = '';
	for(posicao in letras){
		document.querySelector("#letras").innerHTML+='<button class="btn btn-default" id="btnLetra' + letras[posicao] + '" onclick="letra(this)">' + letras[posicao] + '</button>';
	}
	
	document.querySelector("#letrasErradas").className = 'alert alert-danger';
	document.querySelector("#letrasErradas").innerHTML = '';
	document.querySelector("#letrasErradas").style.display="none";	
	document.querySelector("#letras").style.display = "block";
	
	
	document.querySelector("#erro1").style.display="none";	
	document.querySelector("#erro2").style.display="none";	
	document.querySelector("#erro3").style.display="none";	
	document.querySelector("#erro4").style.display="none";	
	document.querySelector("#erro5").style.display="none";	
	document.querySelector("#erro6").style.display="none";	
	
	document.querySelector("#btnIniciar").style.display="none";	
	
	erros = 0;
	acertos = 0;
	
}

function letra(obj){
	var letra = obj.innerHTML;
	if (letra.length > 0){
		if (palavra.indexOf(letra) > -1){
			for(posicao in palavra){
				if (palavra[posicao] == letra){
					document.querySelector("#txtLetra" + posicao).value = letra;
					acerto();
				}
			}
		}
		else{
			document.querySelector("#letrasErradas").innerHTML += letra;
			erro();
		}
	}
	
	obj.disabled='disabled';
	obj.className='btn btn-primary';
}

var erros = 0;
var maxErros = 6;

function erro(){
	erros++;
	document.querySelector("#letrasErradas").style.display="block";	
	document.querySelector("#erro" + erros).style.display = 'block';
		
	if (erros == maxErros){
		document.querySelector("#letrasErradas").className = 'alert alert-danger';
		document.querySelector("#letrasErradas").innerHTML = 'GAME OVER';
		document.querySelector("#letras").style.display = "none";
		document.querySelector("#btnIniciar").style.display="block";	
	}
}

var acertos = 0;
function acerto(){
	acertos++;
	console.log(acertos);
	if (acertos == (tam)){
		document.querySelector("#texto").className = 'alert alert-success';
		document.querySelector("#letras").style.display = "none";
		document.querySelector("#btnIniciar").style.display="block";	
	}
}

function escolherPalavra(){
	palavra = prompt("Digite a palavra desejada");
	iniciar();
	
}