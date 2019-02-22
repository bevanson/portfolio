
$(document).ready(function(){
  $('.skillList').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
  });
});



// ASSIGN VARIABLES
var phrase = document.getElementById('payBills');
var skills = document.getElementById('skills');
var nav = document.getElementById('nav');
var interactiveGallery = document.getElementById('interactiveGallery');

// EVENT TO CHANGE SKILL TEXT WHEN HOVERED

// phrase.addEventListener('mouseover', () => {
//   phrase.style.display = 'none';
// });

// EVENT TO SHANGE BACK TO NORMAL

// phrase.addEventListener('mouseout', () => {
//   phrase.textContent = 'Skills';
// });

nav.addEventListener('scroll', () => {
  nav.style.bacgroundColor = '#fff';
});

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

$('nav').scroll(function(){
  $(this).css('color', 'white');
});

// $('li').hide();
// $('li').mouseover(function(){
//   $(this).show();
// })
