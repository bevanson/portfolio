// ASSIGN VARIABLES
var phrase = document.getElementById('payBills');
var skills = document.getElementById('skills');
var interactiveGallery = document.getElementById('interactiveGallery');

// EVENT TO CHANGE SKILL TEXT WHEN HOVERED

phrase.addEventListener('mouseover', () => {
  phrase.style.display = 'none';
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

    $(this).next('p.text').show();
}).mouseout(function(){
    $(this).css('opacity','1');
    $(this).next('p.text').hide();
});

// $('li').hide();
// $('li').mouseover(function(){
//   $(this).show();
// })
