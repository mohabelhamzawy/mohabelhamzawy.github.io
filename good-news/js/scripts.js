$(document).ready(function(){
    /*$(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });*/
    

    
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        if(y>=700){
            $('.scroll-btn').fadeIn();
        }
        else{
            $('.scroll-btn').fadeOut();
        }
    });
    
    /*$('button:not(.navbar-toggle) , *').click(function(){
        $('.main-nav .navbar-collapse').removeClass('activee');
    });*/
    
    
    $('.top-nav button.navbar-toggle').click(function(){
        $('.main-nav .navbar-collapse').toggleClass('activee');
    });
    
    $('.main-nav .navbar-collapse').click(function(){
        $(this).removeClass('activee');
    });
    
    if($('.main-nav .navbar-collapse').hasClass('activee')){
        $(':not(button.navbar-toggle)').click(function(){
            $('.main-nav .navbar-collapse').removeClass('activee');
        });
    }
    
});