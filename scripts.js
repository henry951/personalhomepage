window.onload=function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('affix');
            console.log("OK");
        } else {
            $('nav').removeClass('affix');
        }

        if ($(document).scrollTop() < document.getElementById("about").offsetTop) {
            $(".navbar ul").find(".active").removeClass("active");
            $(".navbar li:nth-child(1)").addClass('active');
        }
        else if ($(document).scrollTop() < document.getElementById("contact").offsetTop) {
            $(".navbar ul").find(".active").removeClass("active");
            $(".navbar li:nth-child(2)").addClass('active');
        }
        else {
            $(".navbar ul").find(".active").removeClass("active");
            $(".navbar li:nth-child(3)").addClass('active');
        }

    });

    $(".navbar .nav-item").on("click", function(){
        $(".navbar ul").find(".active").removeClass("active");
        $(this).addClass("active");
     });


}