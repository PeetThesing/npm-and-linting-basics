//Elemente HTML
const cards = document.querySelectorAll('[data-js=card]');

// function toggleButton() {
// const buttons = cards.querySelectorAll('[data-js=button]');
cards.forEach(card => {
  const button = card.querySelector('[data-js="button"]');
  const link = card.querySelector('[data-js="link"]');
  const arrow = card.querySelector('[data-js="arrow"]');
  button.addEventListener('click', () => {
    link.classList.toggle('hidden');
    arrow.classList.toggle('rotate');
  });
});

// }
// toggleButton();

// function toggleButton() {
//   const cards = document.querySelectorAll('[data-js=card]');
//   const buttons = card.querySelectorAll('[data-js=buttons]');
//   cards.forEach(card => {
//     const button = card.querySelector('[data-js="button"]');
//     const link = cards.querySelector('[data-js="link"]');
//     const arrow = card.querySelector('[data-js="arrow"]');
//     buttons.addEventListener('click', () => {
//       link.classList.toggle('hide');
//       arrow.classList.toggle('rotate');
//     });
//   });
// }
