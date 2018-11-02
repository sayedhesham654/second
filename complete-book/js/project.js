$(function () {
    /*end our modifcations*/
    //navbar
    $(".navbar-default .navbar-brand").click(function(){
       
        $(this).css("color","#0dbcf7")
        
    });
    
    $("section.our-advantges .box .image .lay-out ").mouseenter(function (){
        $(this).siblings().css("transform","scale(1.5)")
    });
     $("section.our-advantges .box .image .lay-out ").mouseleave(function (){
        $(this).siblings().css("transform","scale(1)")
    });
   $(".navbar-default .navbar-nav > li.dropdown").mouseenter(function (){
       
        $('.navbar-nav > li > .dropdown-menu').fadeIn();
             
        })
     $(".navbar-default .navbar-nav > li.dropdown").mouseleave(function (){
       
        $('.navbar-nav > li > .dropdown-menu').fadeOut();
             
        })
    
    /* start our modifcations*/
    //scroll to element
    
    $(".navbar-default .navbar-nav > li > a").click(function (event){
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop:$('.' + $(this).data("scroll")).offset().top  +(-$("nav").innerHeight()) + 1 
            
        },1000);
        
    });
    
    $(".dropdown-menu > li > a").click (function(evente){
        
        evente.preventDefault();
        
        $("html, body").animate({
            
            scrollTop:$('.' + $(this).data("scroll")).offset().top + 
            
            (-$("nav").innerHeight())+1
            
        },1000)
        
    });
    //padding nav top 
    
    $('body').css("paddingTop",$("nav").innerHeight())
    
    //Add active on link nd remove from siblings
    
    
    
    
    $(window).scroll(function (){
     
        // sync navbar links with sections
        $('section').each(function (){
           
            if($(window).scrollTop() > $(this).offset().top +(-$("nav").innerHeight())) {
                
             var block = $(this).attr("class");
                
               $('.navbar-default .navbar-nav > li > a[data-scroll="' + block +'"]').addClass("active").parent().siblings().find('a').removeClass("active");
                
            }
            
        });
        
        //scroll to top 
        var scrollTop=$("div.scroll-top a");
        
        if ($(window).scrollTop() >= 1000) {
        
            if(scrollTop.is(":hidden")){
                
                scrollTop.fadeIn(1000);
            }
            
           
        
        }else {
            
            scrollTop.fadeOut(1000);
        }
        
       
    });
    
     $("div.scroll-top a").click(function (e){
           
            e.preventDefault();
            
            $("html, body").animate({scrollTop:0},500);
            
        });
    
    
   //pop up 
    
    $("button.button-popup").click(function (){
        
       $("section.popup").fadeIn()
        
    });
    $("section.popup").click(function(){
        
        $(this).fadeOut();
         
    });
    $("section.popup div.in-popup").click(function(e){
        
        e.stopPropagation();
         
    });
    $("section.popup div.in-popup button").click(function(e){
        
        e.preventDefault();
        
        $(this).parent().parent().fadeOut();
         
    });
    
    
    
});
$(window).load(function (){
    
    $("section.overlay .sk-fading-circle").fadeOut(1000,function(){
       
        $('body, html').css("overFlow", "auto")
        
        $(this).parent().fadeOut(2000,function (){
           
            $(this).remove();
            
        });
        
    });
});