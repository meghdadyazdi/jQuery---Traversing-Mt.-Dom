//wait until page is ready
$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); 
    });
    
    // $("button").click(function(){
	// 	$(this).prev().slideToggle('slow');
    // });
    
    // $(".card_image").click(function(){
	// 	$(this).next().children('p').slideDown('slow');
    // });
    
    $(".card").click(function(){
		$(this).toggleClass('highlight'); // add a class by first click and remove it by second click
    });

    $("#select_btn").click(function(){
		$('.card:not(.highlight)').hide('slow'); 
    });
    
     $("#all_btn").click(function(){
		$('.card').show('slow'); 
    });
});
