$(document).ready(function () {

    function service(service, item){
        document.getElementById(service).onmouseover=function(){
            document.getElementById(item).classList.add("service-active");
        };
        document.getElementById(service).onmouseleave=function(){
            document.getElementById(item).classList.remove("service-active");
        };
    };
    //services
    //affichage du menu-scroll
    service("service", "menu-scroll");
    //conserver l'affichage du menu-scroll lors du survol sur elle meme
    service("menu-scroll", "menu-scroll");

     //affichage des services
    service("menu-scroll-item-1", "service-1");
    service("menu-scroll-item-2", "service-2");
    service("menu-scroll-item-3", "service-3");
    service("menu-scroll-item-4", "service-4");
    //conserver affichage des services
    service("service-1", "service-1");
    service("service-2", "service-2");
    service("service-3", "service-3");
    service("service-4", "service-4");

    //projects
    //affichage du project-scroll
    service("project", "project-scroll");
    //conserver l'affichage du project-scroll lors du survol sur elle meme
    service("project-scroll", "project-scroll");

     //affichage des projets
    service("project-scroll-item-1", "project-1");
    service("project-scroll-item-2", "project-2");
    service("project-scroll-item-3", "project-3");
    service("project-scroll-item-4", "project-4");
    //conserver affichage des projets
    service("project-1", "project-1");
    service("project-2", "project-2");
    service("project-3", "project-3");
    service("project-4", "project-4");

    //projects
    //affichage du project-scroll
    service("about", "about-scroll");
    //conserver l'affichage du project-scroll lors du survol sur elle meme
    service("about-scroll", "about-scroll");

     //affichage des projets
    service("about-scroll-item-1", "about-1");
    service("about-scroll-item-2", "about-2");
    service("about-scroll-item-3", "about-3");
    service("about-scroll-item-4", "about-4");
    //conserver affichage des projets
    service("about-1", "about-1");
    service("about-2", "about-2");
    service("about-3", "about-3");
    service("about-4", "about-4");

    //burger toggler
$(".toggler-burger").click(function (e) { 
    e.preventDefault();
    $(".toggler-burger").toggleClass("open");
    $(".mobile-menu").toggleClass("open");
    $(".nav-left").toggleClass("open");
});

//home button
$(window).scroll(function () { 
    if($(window).scrollTop()>80){
        $(".home-button").addClass("scroll");
    }
    else{
        $(".home-button").removeClass("scroll");
    }
});

});