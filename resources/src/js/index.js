
$( document ).ready(function() {
   onScrollUpOrDown();
});


function onScrollUpOrDown(){
   var lastScrollTop = 0;
   var flag = $('#flag').offset().top;
   $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if( (flag - 100) >= st ){
         $('#ro-header').removeClass('bounceInDown');
         $('#ro-header').addClass('bounceOutUp');
         lastScrollTop = st;
         return;
      }
      if (st > lastScrollTop){
         $('#ro-header').removeClass('bounceInDown');
         $('#ro-header').addClass('bounceOutUp');
      } else {
         $('#ro-header').removeClass('bounceOutUp');
         $('#ro-header').addClass('bounceInDown');
      }
      lastScrollTop = st;
   });
}