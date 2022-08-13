$(document).ready(function(){
    $(".home").hover(
        function() {
            $(this).attr("src","images/index/house2.png");
        },
        function() {
            $(this).attr("src","images/index/house.png");
    });
});

$(document).mousemove(function(e) {

    const cursor = $('.cursor');
    const target = $(event.target);

    cursor.css('left', e.clientX-10).css('top', e.clientY-10);
    
    const isLinkTag = target.is('a');
    const isHovered = cursor.hasClass('cursorHover');
    
    if(isLinkTag && !isHovered) {
    
      cursor.addClass('cursorHover');
  
    } else if(!isLinkTag && isHovered) {
    
      cursor.removeClass('cursorHover');
    
    }
    
  });
  
  $(document).mouseleave(function(e) {
  
    const cursor = $('.cursor');
    cursor.hide()
  
  });
  
  $(document).mouseenter(function(e) {
  
    const cursor = $('.cursor');
    cursor.show()
  
  });


