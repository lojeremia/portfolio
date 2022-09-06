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
        $(this).attr("src","images/index/portraitColor.png");
    },
    function() {
        $(this).attr("src","images/index/portrait.png");
  });

  $(".workImg").hover(
    function() {
        $(this).attr("src","images/index/workColor.png");
    },
    function() {
        $(this).attr("src","images/index/work.png");
  });
  
  $(".artImg").hover(
    function() {
        $(this).attr("src","images/index/artColor.png");
    },
    function() {
        $(this).attr("src","images/index/art.png");
  });

  $(".writingImg").hover(
    function() {
        $(this).attr("src","images/index/writingColor.png");
    },
    function() {
        $(this).attr("src","images/index/writing.png");
  });

  $(".resumeImg").hover(
    function() {
        $(this).attr("src","images/index/resumeColor.png");
    },
    function() {
        $(this).attr("src","images/index/resume.png");
  });

  // Toggle menu on click
  $("#menu-toggler").click(function() {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
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

window.onload=function(){
  navFade();
}

const navFade = () => {
  const burgerIcon=document.querySelector(".burger")
  const items = document.querySelectorAll(".item");

  burgerIcon.addEventListener('click', () => {
    items.forEach((item,index)=>{
      item.classList.toggle("active")
      if(item.style.animation){
        item.style.animation = "";
      }
      else{
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    burgerIcon.classList.toggle('mark')
  });
};