function iniciaJogo() {
	var url = window.location.search;
	var nivel_jogo = url.replace("?", "");
	var tempo_segundos = 0;	


 	if(nivel_jogo == 1) { // 1 facil -> 120 segundos
 		tempo_segundos = 120;
 	}

 	if(nivel_jogo == 2) { // 2 normal -> 60 segundos
 		tempo_segundos = 60;
 	}

 	if(nivel_jogo == 3) { // 3 difícil -> 30 segundos
 		tempo_segundos = 30;
 	}

 	//inserindo segundos no span
 	document.getElementById('cronometro').innerHTML = tempo_segundos;

 	//
 	var  qtde_baloes = 20;
 	cria_baloes(qtde_baloes);

 	//imprimir qtde balões inteiros
 	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
 	document.getElementById('baloes_estourados').innerHTML = 0; 

 }

 function cria_baloes(qtde_baloes) {
 	for(var i = 1; i <= qtde_baloes; i++) {
 	
 		var balao = document.createElement("img");
 		balao.src = 'imagens/balao_azul_pequeno.png';
 		balao.style.margin='10px';
 		document.getElementById('cenario').appendChild(balao);
 	}	
 }