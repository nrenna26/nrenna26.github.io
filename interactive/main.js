$(document).ready(function(){
  $("#button").click(function(){
    $(".title").fadeOut();
    $(".first").fadeIn();
  });

  $("#button_1").click(function(){
      $(".first").fadeOut();
      $(".second").fadeIn();
    });

  $("#button_2").click(function(){
      $(".second").fadeOut();
      $(".third").fadeIn();
    });

  $("#button_3").click(function(){
      $(".third").fadeOut();
      $(".fourth").fadeIn();
    });

  $("#button_4").click(function(){
      $(".fourth").fadeOut();
      $(".fifth").fadeIn();
    });

  $("#button_5").click(function(){
      $(".fifth").fadeOut();
      $(".sixth").fadeIn();
    });

  $("#button_6").click(function(){
      $(".sixth").fadeOut();
      $(".seventh").fadeIn();
    });

  $("#button_7").click(function(){
      $(".seventh").fadeOut();
      $(".eigth").fadeIn();
    });

  $("#button_8").click(function(){
      $(".eigth").fadeOut();
      $(".ninth").fadeIn();
    });

  $("#button_9").click(function(){
      $(".ninth").fadeOut();
      $(".tenth").fadeIn();
    });

  $("#button_10").click(function(){
      $(".tenth").fadeOut();
      $(".eleventh").fadeIn();
    });

  $("#button_11").click(function(){
      $(".eleventh").fadeOut();
      $(".twelfth").fadeIn();
    });

  $("#button_12").click(function(){
      $(".twelfth").fadeOut();
      $(".thirteenth").fadeIn();
    });

  $("#button_13").click(function(){
      $(".thirteenth").fadeOut();
      $(".title").fadeIn();
    });

  $("#money").click(function(){
      $(".money").animate({
        height: '250px',
        width: '250px'
      });
    });

  $("#eggs").click(function(){
      $(".third").append("egg");
    });



});
