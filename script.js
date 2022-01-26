let elBtn = document.querySelectorAll('.form__btn');
let elText = document.querySelector('.span__add');
let elInput = document.querySelector('.form__input');
let form = document.querySelector('.form__form')
let elBtnSubmit = document.querySelector('.btn__submit');

elBtn.forEach((item, index) => {
  item.addEventListener('click', () => {

    if (index === 0) {
      elBtn[1].classList.remove('form__btn--active')
      elBtn[2].classList.remove('form__btn--active')
      elText.textContent = item.textContent;
    } else if (index === 1) {
      elBtn[0].classList.remove('form__btn--active')
      elBtn[2].classList.remove('form__btn--active')
      elText.textContent = item.textContent;
    } else if (index === 2) {
      elBtn[0].classList.remove('form__btn--active')
      elBtn[1].classList.remove('form__btn--active')
      elText.textContent = item.textContent;
    } 
    item.classList.toggle('form__btn--active')
    
    if (!item.classList.contains('form__btn--active')) elText.textContent = '';
  })
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (elInput.value == 1) {
    elText.textContent = 'positive';
  } else if (elInput.value == 2) {
    elText.textContent = 'negative';
  } else if (elInput.value == 3) {
    elText.textContent = 'neutral';
  } else {
    alert('h')
  }
})