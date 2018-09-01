
var phrase = document.getElementById('payBills');

phrase.addEventListener('mouseover', () => {
  phrase.textContent = 'to Pay the Bills';
});

phrase.addEventListener('mouseout', () => {
  phrase.textContent = 'Skills';
});
