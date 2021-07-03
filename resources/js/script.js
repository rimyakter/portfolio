//MixitUp
var mixer = mixitup('.grid-portfolio-container');

//scrollify
  $(function() {
          $.scrollify({
            section : ".scrollify",
              scrollSpeed: 2000,
              setHeights: false,
              updateHash: false,
          });
        });
//Hamburger Menu
function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}

function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

//Smooth scroll
$(function(){
    $('.menu-item a, .scroll-down a').on('click',function(){
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        return false;
    });
});