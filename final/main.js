$(document).ready(function(){

  var palletts = [];

  palletts[0] = {
    color1: "#e6e8e8",
    link1: "https://bit.ly/35RNjix",
      // Dove Grey
    color2: "#b4d6a9",
    link2: "https://bit.ly/2WegqJn",
      // Pastel Green
    color3: "#f5b47f",
    link3: "https://bit.ly/3ccK1bK",
      // Pastel Orange
    color4: "#949494",
    link4: "https://bit.ly/2YIUlEx",
      // Grey
    color5: "#2e4a27",
    link5: "https://bit.ly/3bbIGAQ",
      // Hunter Green
  }

  palletts[1] = {
    color1: "#e6e8e8",
    link1: "https://bit.ly/35RNjix",
      // Dove Grey
    color2: "#949494",
    link2: "https://bit.ly/2YIUlEx",
      // Grey
    color3: "#dddece",
    link3: "https://bit.ly/2SLqN5A",
      // Taupe
    color4: "#c5e2ed",
    link4: "https://bit.ly/3fAYq3R",
      // Light Blue
    color5: "#01274d",
    link5: "https://bit.ly/3cfVx6i",
      // Navy Blue
  }

  palletts[2] = {
    color1: "#e6e8e8",
    link1: "https://bit.ly/35RNjix",
      // Dove Grey
    color2: "#c5e2ed",
    link2: "https://bit.ly/3fAYq3R",
      // Light Blue
    color3: "#e67460",
    link3: "https://bit.ly/2Wv1JR2",
      // Coral
    color4: "#eb4913",
    link4: "https://bit.ly/2YIr5O9",
      // Red Orange
    color5: "#000000",
    link5: "https://bit.ly/2WbjlTi",
      // Black
  }

  palletts[3] = {
    color1: "#ffebeb",
    link1: "https://bit.ly/2We0irq",
      // Light Pink
    color2: "#dddece",
    link2: "https://bit.ly/2SLqN5A",
      // Taupe
    color3: "#f5b47f",
    link3: "https://bit.ly/3ccK1bK",
      // Pastel Orange
    color4: "#8f4c04",
    link4: "https://bit.ly/35NUE2w",
      // Golden Brown
    color5: "#01274d",
    link5: "https://bit.ly/3cfVx6i",
      // Navy Blue

  }

  palletts[4] = {
    color1: "#e6e8e8",
    link1: "https://bit.ly/35RNjix",
      // Dove Grey
    color2: "#8f4c04",
    link2: "https://bit.ly/35NUE2w",
      // Golden Brown
    color3: "#4c91e0",
    link3: "https://bit.ly/2WD96pS",
      // Baby Blue
    color4: "#01274d",
    link4: "https://bit.ly/3cfVx6i",
      // Navy Blue
    color5: "#000000",
    link5: "https://bit.ly/2WbjlTi",
      // Black

  }

  palletts[5] = {
    color1: "#ffebeb",
    link1: "https://bit.ly/2We0irq",
      // Light Pink
    color2: "#dddece",
    link2: "https://bit.ly/2SLqN5A",
      // Taupe
    color3: "#b4d6a9",
    link3: "https://bit.ly/2WegqJn",
      // Pastel Green
    color4: "#2e4a27",
    link4: "https://bit.ly/3bbIGAQ",
      // Hunter Green
    color5: "#8f4c04",
    link5: "https://bit.ly/35NUE2w",
      // Golden Brown
  }

  palletts[6] = {
    color1: "#ffebeb",
    link1: "https://bit.ly/2We0irq",
      // Light Pink
    color2: "#d4bb85",
    link2: "https://bit.ly/3dpoGMw",
      // Beige
    color3: "#8f4c04",
    link3: "https://bit.ly/35NUE2w",
      // Golden Brown
    color4: "#b4d6a9",
    link4: "https://bit.ly/2WegqJn",
      // Pastel Green
    color5: "#2e4a27",
    link5: "https://bit.ly/3bbIGAQ",
      // Hunter Green

  }

  palletts[7] = {
    color1: "#c5e2ed",
    link1: "https://bit.ly/3fAYq3R",
      // Light Blue
    color2: "#4c91e0",
    link2: "https://bit.ly/2WD96pS",
      // Baby Blue
    color3: "#d4bb85",
    link3: "https://bit.ly/3dpoGMw",
      // Beige
    color4: "#f5b47f",
    link4: "https://bit.ly/3ccK1bK",
      // Pastel Orange
    color5: "#eb4913",
    link5: "https://bit.ly/2YIr5O9",
      // Red Orange
  }

  palletts[8] = {
    color1: "#ffebeb",
    link1: "https://bit.ly/2We0irq",
      // Light Pink
    color2: "#e67460",
    link2: "https://bit.ly/2Wv1JR2",
      // Coral
    color3: "#8f4c04",
    link3: "https://bit.ly/35NUE2w",
      // Golden Brown
    color4: "#c5e2ed",
    link4: "https://bit.ly/3fAYq3R",
      // Light Blue
    color5: "#000000",
    link5: "https://bit.ly/2WbjlTi",
      // Black
  }

  palletts[9] = {
    color1: "#e6e8e8",
    link1: "https://bit.ly/35RNjix",
      // Dove Grey
    color2: "#ffebeb",
    link2: "https://bit.ly/2We0irq",
      // Light Pink
    color3: "#f5b47f",
    link3: "https://bit.ly/3ccK1bK",
      // Pastel Orange
    color4: "#e67460",
    link4: "https://bit.ly/2Wv1JR2",
      // Coral
    color5: "#b4d6a9",
    link5: "https://bit.ly/2WegqJn",
      // Pastel Green
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
