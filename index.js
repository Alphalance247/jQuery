// $("h1").click(function(){
//     $("h1").html("HELLO GUYS HOPE YOU DOING WELL")
// })

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",
//     function (){
//         document.querySelector("h1").style.color ="red"
//     });
    
// }
    // $("button").click(function () {
    //     $("h1").css("color", "black")
    // });

    // adding keyPress using jquery

    // $(document).keydown(function (event) {
    //     $("h1").text(event.key)
    // })

    // other methods fo manipulating in jQuery

    // $("h1").on("click", function () {
    //     $("h1").css("color", "black")
    // })

    // adding prepend, append, before and after

    $("h1").before("<button>new</button>");
    $("h1").after("<button>new</button>");
    $("h1").append("<button>new</button>");
    $("h1").prepend("<button>new</button>");

    // to remove

    $("button").remove();


    // jquery animation

    // $("h1").on("mouseover", function () {
    //     buttonAnimation()
    // })
    // function buttonAnimation(newKey) {
    //     var documentRep = document.querySelector("."+ newKey);
    //     documentRep.classList.add("pressed");
    
    //     setTimeout( function() {
    //         documentRep.classList.remove("pressed");  
    //     }, 100);
    // }

    // $("button").on("mouseover", function() {
    //     $("h1").slideToggle();

    // })
    animate
    $("button").on("mouseover", function() {
        $("h1").animate({opacity:0.5});

    })
    $("button").on("mouseover", function() {
        $("h1").slideUp().slideDown().animate({opacity:0.5});

    });

