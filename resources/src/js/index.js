import Typed from 'typed.js';

require('./vendor/uikit/js/uikit');
require('./vendor/uikit/js/components/notify');


$( document ).ready(function() {

   $('#loading').fadeOut();

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

    $('#contact-form').submit((event) => {
      'use strict';
      event.preventDefault();
   
      var data = {
         name : $('#contact-form-name').val(),
         email: $('#contact-form-mail').val(),
         message: $('#contact-form-message').val()
      }
   
   
      //cleaning
      $('#contact-form-name').val('');
      $('#contact-form-mail').val('');
      $('#contact-form-message').val('');
      console.log(UIkit);
   
      
      UIkit.notify('asda',{});
   
      console.log(data);
   });
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
