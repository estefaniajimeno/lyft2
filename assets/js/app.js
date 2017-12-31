
//cuando carge la página la primera imagen cambiará (2 segundos)
$(document).ready(function(){
	$('header').fadeOut(2000);
	$("#demo").intlTelInput({
		
	});
});
$('#chooseCountry').hide();
$('.verify').hide();
$('.agree').hide();
$('.end').hide();

//fondo principal boton sign-up
$('#btn-2').click(flag);  //seguir
$('#back').click(comeBack);  //volver pantalla principal

function flag(){
	$('.start').hide();
	$('#chooseCountry').show();
};

function comeBack(){
	$('#chooseCountry').hide();
	$('.start').show();
};

$('#next').click(prove);  //seguir
$('#back2').click(comeBack2);  //volver a chooseCountry

function prove(){
	$('#chooseCountry').hide();
	$('.verify').show();
};

function comeBack2(){
	$('.verify').hide();
	$('#chooseCountry').show();
};

$('#following').click(cypher);
$('#back3').click(comeBack3);  //volver a verificar

function cypher(){
	$('.verify').hide();
	$('.agree').show();
};

function comeBack3(){
	$('.agree').hide();
	$('.verify').show();
};

$('#comming').click(final);

function final(){
	$('.agree').hide();
	$('.end').show();
};


//Habilita el boton next al ingresar 10 digitos
 $('.flags').keyup(function() {
    var number = $('.flags').val();
      if (number.length == 10) {
        $('#next').removeAttr('disabled');
     
      }else{
      	$('#next').attr('disabled','true');
      }
    });
  
  //habilita el boton resend para recibir 3 digitos
$('#lines').keyup(function() {
    var number = $('#lines').val();
      if (number.length == 3) {
        $('#following').removeAttr('disabled');
     
      }else{
      	$('#following').attr('disabled','true');
      }
    });

$('.check').click(function() {
    var correo = $('.email').val();
    var user = $('.name').val();
      if (user.length != "" & correo.length != "") {
        $('#comming').removeAttr('disabled');
     
      }else{
      	$('#comming').attr('disabled','true');
      }
    });
