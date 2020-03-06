// DOM catch to a variable
const title = [...document.querySelectorAll('.title')];
const panel = [...document.querySelectorAll('.panel')];
const icon = [...document.querySelectorAll('.title a span i')]

// Accordion initial view
title[0].classList.add('active')
panel[0].classList.remove('closed')
icon[0].classList.remove('fa-plus-square')
icon[0].classList.add('fa-minus-square')

title.forEach((title, index) => {
  title.addEventListener('click', () => {
    panel[index].classList.toggle('closed')
    title.classList.toggle('active')
    icon[index].classList.toggle('fa-plus-square')
    icon[index].classList.toggle('fa-minus-square')
  })
});