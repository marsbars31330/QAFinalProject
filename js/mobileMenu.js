 // Hamburger menu
 $(document).ready(function(){
    $(".nav-icon").click(function(){
      $(".overlay").fadeToggle(200);
      //fadeToggle(speed of fade)
      $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
  });

  $('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".nav-icon a").toggleClass('btn-open').toggleClass('btn-close');
    open=false;
  });