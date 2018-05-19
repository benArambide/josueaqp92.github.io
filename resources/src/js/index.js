
$( document ).ready(function() {
   onScrollUpOrDown();
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