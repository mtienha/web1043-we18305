const element = document.querySelector('.my-element');

element.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

element.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});