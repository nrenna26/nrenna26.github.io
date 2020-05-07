$(document).ready(function(){

  var palletts = [];

  palletts[0] = {
    color1: "#12f689",
    link1: "https://www.google.com",
    color2: "#72f6gf",
    link2: "https://www.google.com",
    color3: "#12f679",
    link3: "https://www.google.com",
    color4: "#72f6gf",
    link4: "https://www.google.com",
    color5: "#12f669",
    link5: "https://www.google.com",
  }

  palletts[1] = {
    color1: "#72f6af",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[2] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[3] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[4] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[5] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[6] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[7] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[8] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[9] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }

  palletts[10] = {
    color1: "#92fa00",
    link1: "https://www.google.com",
    color2: "#72f6af",
    link2: "https://www.google.com",
  }


  var name = "";
  var astro = "";
  $(".intro").click(function(){
    $(".intro").fadeOut();
    $(".type").fadeIn();
  });

  $("#button1").click(function(){
    $(".type").fadeOut();
    $(".astrology").fadeIn();
    name = $("#fname").val();
    console.log(name);
  });

  $("#button2").click(function(){
    $(".astrology").fadeOut();
    $(".bar").fadeIn();
    var bar1 = $("#bar1");
    var bar2 = $("#bar2");
    astro = $("#sign").val();

    var pallett = name.length + astro.length;

    pallett %= palletts.length;

    bar1.css("background", palletts[pallett].color1);
    $("#link1").attr("href",palletts[pallett].link1 );
    bar2.css("background", palletts[pallett].color2);
    $("#link2").attr("href",palletts[pallett].link2 );
    bar3.css("background", palletts[pallett].color3);
    $("#link3").attr("href",palletts[pallett].link3 );
    bar4.css("background", palletts[pallett].color4);
    $("#link4").attr("href",palletts[pallett].link4 );
    bar5.css("background", palletts[pallett].color5);
    $("#link5").attr("href",palletts[pallett].link5 );

  });






});
