$(document).ready(function(){
    $(".home").hover(
        function() {
            $(this).attr("src","images/house2.png");
        },
        function() {
            $(this).attr("src","images/house.png");
    });

    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", function(e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
});

