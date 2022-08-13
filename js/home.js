$(document).ready(function(){
  $(".logo").hover(
      function() {
          $(this).attr("src","images/index/logoHover.png");
      },
      function() {
          $(this).attr("src","images/index/logo.png");
  });

  $(".aboutImg").hover(
    function() {
        $(this).attr("src","images/home/portraitColor.png");
    },
    function() {
        $(this).attr("src","images/home/portrait.png");
  });

  $(".workImg").hover(
    function() {
        $(this).attr("src","images/home/workColor.png");
    },
    function() {
        $(this).attr("src","images/home/work.png");
  });
  
  $(".artImg").hover(
    function() {
        $(this).attr("src","images/home/artColor.png");
    },
    function() {
        $(this).attr("src","images/home/art.png");
  });

  $(".writingImg").hover(
    function() {
        $(this).attr("src","images/home/writingColor.png");
    },
    function() {
        $(this).attr("src","images/home/writing.png");
  });

  $(".resumeImg").hover(
    function() {
        $(this).attr("src","images/home/resumeColor.png");
    },
    function() {
        $(this).attr("src","images/home/resume.png");
  });
});

$(document).mousemove(function(e) {

  const cursor = $('.cursor');
  const target = $(event.target);

  cursor.css('left', e.clientX-10).css('top', e.clientY-10);
  
  const isLinkTag = target.is('a');
  const isImgTag = target.is('img');
  const isHovered = cursor.hasClass('cursorHover');
  
  if((isLinkTag || isImgTag) && !isHovered) {
  
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
