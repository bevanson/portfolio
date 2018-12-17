// ASSIGN VARIABLES
var phrase = document.getElementById('payBills');
var list = document.getElementById('skillsList');
var interactiveGallery = document.getElementById('interactiveGallery');

// EVENT TO CHANGE SKILL TEXT WHEN HOVERED

phrase.addEventListener('mouseover', () => {
  phrase.textContent = 'to Pay the Bills';
});

// EVENT TO SHANGE BACK TO NORMAL

phrase.addEventListener('mouseout', () => {
  phrase.textContent = 'Skills';
});

// interactiveGallery.addEventListener('mouseover', () => {
//   interactiveGallery.style.opacity = '.3';
//   interactiveGallery.textContent = 'Used a jQuery plugin to search through photos.  Used JavaScript for search to sort out input box.'
// });

$('img').mouseover(function(){
    $(this).css('opacity','.1');
    $(this).next('div.text').show();
}).mouseout(function(){
    $(this).css('opacity','1');
    $(this).next('div.text').hide();
});
