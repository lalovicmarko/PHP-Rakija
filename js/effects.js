$(document).ready(function(){
    $("#dugmeprijava").click(function(){
		$("#dugmeprijava").css("background-color", "#235689");
		$("#dugmeregistracija").css("background-color", "black"); 
        $(".prijava").fadeIn(5);
		$(".registracija").fadeOut(5);
    });
});

$(document).ready(function(){
    $("#dugmeregistracija").click(function(){
		$("#dugmeprijava").css("background-color", "black");
		$("#dugmeregistracija").css("background-color", "#235689");
        $(".registracija").fadeIn(5);
		$(".prijava").fadeOut(5);
    });
});

$(document).ready(function(){
	$("#konkurss").click(function(){
		if($( window ).width() > 768)
		{
			$("#co").slideToggle("slow");
		}	
		if($( window ).width() < 768)
		{
			$("#co2").slideToggle("slow");
		}	
	});
	
});

$(window).resize(function() {

  if ($(this).width() < 768) {

    $('#co').hide();

  } else {

    $('#co2').hide();

    }

});