var biblioteca=["computador", "monitor","youtube"];
var qtde=biblioteca.length-1;
var pos=Math.round(Math.random()*qtde);
var palavra=biblioteca[pos];
var tam=palavra.length;
var cxLetras=[];
var acertos;
var errosMax=7
var erros=0
var acertou=false;
var jogando=false;
var desenhos = [];
var jog;

function defineLetras(l){
var obj;
for (var i=0;i<20;i++){
	obj=document.getElementById("letra"+i).value="";
	obj=document.getElementById("letra"+i).style.display="none";
}
for(var i=0;i<l;i++){
	obj=document.getElementById("letra"+i).style.display="inline-block";
}
}

function jogar(){
	jog.focus();
	if(jog.value==""){
		alert("digite uma letra");
	}else{
		if(jogando){
			var obj;
			var letraTmp;
			var letra;
			var pesq;
			letra= jog.value;
			jog.value="";
			pesq=palavra.match(letra);
			acertou=false;
			while(pesq!=null){
				letraTmp=palavra.search(letra);
				obj=document.getElementById("letra"+letraTmp).value=letra;
				palavra=palavra.replace(letra,'0');
				acertos++;
				pesq=palavra.match(letra);
				acertou=true;
			}
			if(!acertou){
				document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase() + letra;
				erros++
				if(erros==1){
					document.getElementById("img").src="01.jpg"
				}
				if(erros==2){
					document.getElementById("img").src="02.jpg"
				}
				if(erros==3){
					document.getElementById("img").src="03.jpg"
				}
				if(erros==4){
					document.getElementById("img").src="04.jpg"
				}
				if(erros==5){
					document.getElementById("img").src="05.jpg"
				}
				if(erros==6){
					document.getElementById("img").src="06.jpg";
					document.getElementById("dvmsg").innerHTML="PERDEU";
					jogando=false;
				}
			} else
			if(acertos==tam){
				document.getElementById("dvmsg").innerHTML="GANHOU";
			}
		}
	}
}



function inicia(){
	jogando=true;
	jog = document.getElementById("letraJ");
	jog.value="";
	jog.focus();
	acertos=0;
	erros=0;
	acertou=false;
	document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas:";
	pos=Math.round(Math.random()*qtde);
	palavra=biblioteca[pos];
	tam=palavra.length;
	defineLetras(tam);
	document.getElementById("dvmsg").innerHTML="";
	document.getElementById("img").src="07.png"
}