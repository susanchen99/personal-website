$(document).ready(function() {
    $("#lightbox").hide();
    $("#nav-bar").css('opacity',"0")
    document.getElementsByTagName("html")[0].style.visibility = "visible";

    $('#photo').hover(
        function(){
          $(this).attr('src',"assets/img/img2.jpg")
        },
        function(){
          $(this).attr('src',"assets/img/img1.jpg")
        }
    );

    $('.circle').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(window).scroll(function(){
        $("#hello").css("opacity", 1 - $(window).scrollTop() / 250);
        $("#susan").css("opacity", 1 - $(window).scrollTop() / 250);
      });
    

	$("#bearmaps-preview").click(function() {
        $("#lightbox").show();
        $("#spotify").hide();
        $("#bearmaps").show();
    })
    
    $("#spotify-preview").click(function() {
        $("#lightbox").show();
        $("#bearmaps").hide();
        $("#spotify").show();
	})
	
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
    })
    

    var inview = new Waypoint.Inview({
        element: $('#photo')[0],
        enter: function(direction) {
            if (direction == "down") {
                $("#nav-bar").css("opacity", 1)
                $("#nav-bar").css("transition", "all 1s ease")
            }
        },
        exited: function(direction) {
            if (direction == "up") {
                $("#nav-bar").css("opacity", 0)
            }
        }
      })

    //   var waypoint = new Waypoint({
    //     element: document.getElementById('about'),
    //     handler: function() {
    //         $("#c2").css("background-color", "#5A5A5A")
    //     },
    //     offset: 200
    //   })

    //   var waypoint = new Waypoint({
    //     element: document.getElementById('projects'),
    //     handler: function() {
    //         $("#c2").css("background-color", none)
    //         $("#c3").css("background-color", "#5A5A5A")
    //     },
    //     offset: 200
    //   })


});
