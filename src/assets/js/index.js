import Typed from 'typed.js';

const $ = window.$;

$( document ).ready(function() {

   setTimeout( function() { $('#loading').fadeOut(); }, 2000);

   onScrollUpOrDown();
   $('#toggle').click(toggleNav);
   var options = {
      strings: [
         "¿QUÉ PUEDO HACER POR TI?",
         "SITIOS WEB PARA EMPRESAS", 
         "TIENDAS VIRTUALES",
         "UX/UI DESIGNER / WEB DEVELOPER",
         "FRONTEND/BACKEND DEVELOPER"],
      typeSpeed: 60,
      loop: true,
      showCursor: false
    }
    
    var typed = new Typed(".typing", options);

    $('#contact-form').submit(sendMessage);
    smoothScroll();
});


function onScrollUpOrDown(){
   var lastScrollTop = 0;
   var flag = $('#flag').offset().top;
   $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if( st >=  flag ){
         $('#ro-header').removeClass('bounceOutUp');
         $('#ro-header').addClass('bounceInDown');
         $('#ro-header').removeClass('hide');
      }
      else{
         if($('#ro-header').hasClass('hide')) return;
         $('#ro-header').removeClass('bounceInDown');
         $('#ro-header').addClass('bounceOutUp');
      }
   });
}

function toggleNav(){
   $('.nav-mobile-wrap').toggleClass('visible');
}

function sendMessage(event){
   event.preventDefault();

   var data = {
      name : $('#contact-form-name').val(),
      email: $('#contact-form-mail').val(),
      message: $('#contact-form-message').val(),
      code: 'aG9sYUBqb3N1ZWFyYW1iaWRlLmNvbQ'
   }
   if(!data.name || !data.email || !data.message ) {console.log('dsa'); return;}
   $('#contact-form-btn').prop("disabled",true);
   $('#contact-form-btn').text('Cargando...');
   $.post( "http://josuearambide.com/ro/api/send_mail",data, function( response ) {
      console.log(response);
      if(response.success){
         $('#msg-success').fadeIn();
      }
      else{
         $('#msg-danger').fadeIn();
      }
      
   })
   .always(function(){
      $('#contact-form-name').val('');
      $('#contact-form-mail').val('');
      $('#contact-form-message').val('');
      $('#contact-form-btn').text('Enviar');
   });
}

function smoothScroll(){
   $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('.nav-mobile-wrap').removeClass('visible');
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });
}