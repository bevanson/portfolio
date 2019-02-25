
$(document).ready(function(){
  $('.skillList').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
  });

//  TRYING TO GET SCROLL EFFECT TO MY HEADER NAV
//   $(window).scroll(function() { // check if scroll event happened
//   if ($(document).scrollTop() > 1) { // check if user scrolled more than 50 from top of the browser window
//     $(".main-nav").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
//     $(".nav a").css("color", "black");
//     $(".navLogo a").css("color", "black");
//     $(".navLogo a").css("border-color", "black");
//   } else {
//     $(".main-nav").css("background-color", "transparent"); // if not, change it back to transparent
//   }
// });
});




// ASSIGN VARIABLES
var phrase = document.getElementById('payBills');
var skills = document.getElementById('skills');
var nav = document.getElementById('nav');
var interactiveGallery = document.getElementById('interactiveGallery');



// HAD A HOVER EFFECT TO DISPLAY INFORMATION ABOUT PROJECT.  (LOOKS TO UGLY RIGHT NOW)
// interactiveGallery.addEventListener('mouseover', () => {
//   interactiveGallery.style.opacity = '.3';
//   interactiveGallery.textContent = 'Used a jQuery plugin to search through photos.  Used JavaScript for search to sort out input box.'
// });

// $('img').mouseover(function(){
//     $(this).css('opacity','.1');
//
//     $(this).next('p.text').show();
// }).mouseout(function(){
//     $(this).css('opacity','1');
//     $(this).next('p.text').hide();
// });
