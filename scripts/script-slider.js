const sliderList = document.querySelector('.slider-list'),
  previousButtons = document.querySelectorAll('.previous-button'),
  nextButtons = document.querySelectorAll('.next-button'),
  dots = document.querySelectorAll('.slider-pagination-item');

let position = 0,
  dotIndex = 0;

const thisSlide = (index) => {
  for (dot of dots) {
    dot.classList.remove('slider-pagination-item-active')
  }
  dots[index].classList.add('slider-pagination-item-active')
}

for (nextButton of nextButtons) {
  nextButton.addEventListener('click', function () {
    position += 1160;
    dotIndex++;
    if (position > (dots.length - 1) * 1160) {
      position = 0;
      dotIndex = 0;
    }
    sliderList.style.left = -position + 'px';
    thisSlide(dotIndex);
  })
};

for (previousButton of previousButtons) {
  previousButton.addEventListener('click', function () {
    position -= 1160;
    dotIndex--;
    if (position < 0) {
      position = (dots.length - 1) * 1160;
      dotIndex = (dots.length - 1);
    }
    sliderList.style.left = -position + 'px';
    thisSlide(dotIndex);
  })
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    position = 1160 * index;
    sliderList.style.left = -position + 'px';
    dotIndex = index;
    thisSlide(dotIndex);
  })
})
