// Red lines - START

const scrollers = document.querySelectorAll(".red-line__scroller");

if (scrollers) {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".red-line__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}

// Red lines - END


// Slider Members - start

const slider = document.querySelector('.members-section__slider');

if (slider) {
  const sliderWrapper = document.querySelector('.members-section__slider-wrapper');
  const slides = document.querySelectorAll('.members-section__slide');
  const slide = document.querySelector('.members-section__slide');
  const arrowNext = document.querySelectorAll('[js-arrow-next]');
  const arrowBack = document.querySelectorAll('[js-arrow-back]');
  const displayTotalSlides = document.querySelectorAll('[js-total-num]');
  const displayCurrentSlide = document.querySelectorAll('[js-current-num]');

  const numOfSlides = slides.length; // общее кол-во слайдов
  let currentNumOfSlide = 3; // текущий номер слайда
  const widthSlide = slide.offsetWidth + 20; // длина прокручивания


  displayTotalSlides.forEach(totalSlide => {  // отображение кол-ва слайдов
    totalSlide.innerHTML = ' / ' + numOfSlides;
  })

  displayCurrentSlide.forEach(currentSlide => {  // отображение номера текущего слайда
    currentSlide.innerHTML = currentNumOfSlide;
  })


  setInterval(() => {
    if (currentNumOfSlide !== numOfSlides) {
      sliderWrapper.scrollBy({
        left: widthSlide,
        behavior: 'smooth'
      })

      ++currentNumOfSlide;

      displayCurrentSlide[0].innerHTML = currentNumOfSlide;
      displayCurrentSlide[1].innerHTML = currentNumOfSlide;

      if (currentNumOfSlide !== 3) {
        arrowBack[0].classList.remove('disabled');
        arrowBack[1].classList.remove('disabled');
      }

      if (currentNumOfSlide == numOfSlides) {
        arrowNext[0].classList.add('disabled');
        arrowNext[1].classList.add('disabled');
      }
    } else {
      currentNumOfSlide = 3;
      displayCurrentSlide[0].innerHTML = currentNumOfSlide;
      displayCurrentSlide[1].innerHTML = currentNumOfSlide;
      sliderWrapper.scrollBy({
        left: -1371,
        behavior: 'smooth'
      })
      arrowNext[0].classList.remove('disabled');
      arrowNext[1].classList.remove('disabled');
      arrowBack[0].classList.add('disabled');
      arrowBack[1].classList.add('disabled');

    }


  }, 4000);


  arrowNext.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (currentNumOfSlide !== numOfSlides) {
        sliderWrapper.scrollBy({
          left: widthSlide,
          behavior: 'smooth'
        })

        ++currentNumOfSlide;
      }

      displayCurrentSlide[0].innerHTML = currentNumOfSlide;
      displayCurrentSlide[1].innerHTML = currentNumOfSlide;

      if (currentNumOfSlide !== 3) {
        arrowBack[0].classList.remove('disabled');
        arrowBack[1].classList.remove('disabled');
      }

      if (currentNumOfSlide == numOfSlides) {
        arrow.classList.add('disabled');
      }
    })
  });

  arrowBack.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (currentNumOfSlide !== 3) {
        sliderWrapper.scrollBy({
          left: -widthSlide,
          behavior: 'smooth'
        })

        --currentNumOfSlide;
      }

      displayCurrentSlide[0].innerHTML = currentNumOfSlide;
      displayCurrentSlide[1].innerHTML = currentNumOfSlide;

      if (currentNumOfSlide == 3) {
        arrow.classList.add('disabled');
      }

      if (currentNumOfSlide !== numOfSlides) {
        arrowNext[0].classList.remove('disabled');
        arrowNext[1].classList.remove('disabled');
      }
    })
  })
}


// Slider Members - end

// Slider Steps - start

const sliderStep = document.querySelector('.step-section__slider');

if (sliderStep) {
  const sliderWrapperStep = document.querySelector('.step-section__slider-wrapper');
  const slidesStep = document.querySelectorAll('.step-section__slide');
  const slideStep = document.querySelector('.step-section__slide');
  const arrowStepNext = document.querySelector('[js-step-next-btn]');
  const arrowStepBack = document.querySelector('[js-step-back-btn]');
  const pagination = document.querySelector('[js-pagination]');

  const numOfSlides = slidesStep.length; // общее кол-во слайдов
  let currentNumOfSlide = 1; // текущий номер слайда
  const widthSlideStep = slideStep.offsetWidth + 20; // длина прокручивания

  // Пагинация
  if (numOfSlides > 0) {
    for (let i = 0; i < numOfSlides; i++) {
      let bullet = document.createElement("span");
      let numOfBullet = i + 1;
      if (i == 0) {
        bullet.classList.add('active')
      }
      bullet.classList.add('bullet', numOfBullet);
      pagination.appendChild(bullet);
    }
  }
  const bullets = document.querySelectorAll('.bullet');

  arrowStepNext.addEventListener('click', () => {
    if (currentNumOfSlide !== numOfSlides) {
      sliderWrapperStep.scrollBy({
        left: widthSlideStep,
        behavior: 'smooth'
      })

      ++currentNumOfSlide;

      bullets.forEach((bullet) => {
        if (bullet.classList.contains(currentNumOfSlide)) {
          bullet.classList.add('active')
        }

        if (bullet.classList.contains('active')) {
          if (!bullet.classList.contains(currentNumOfSlide)) {
            bullet.classList.remove('active')
          }
        }
      })
    }

    if (currentNumOfSlide !== 1) {
      arrowStepBack.classList.remove('disabled');
    }

    if (currentNumOfSlide == numOfSlides) {
      arrowStepNext.classList.add('disabled');
    }
  })

  arrowStepBack.addEventListener('click', () => {
    if (currentNumOfSlide !== 1) {
      sliderWrapperStep.scrollBy({
        left: -widthSlideStep,
        behavior: 'smooth'
      })

      --currentNumOfSlide;


      bullets.forEach((bullet) => {
        if (bullet.classList.contains(currentNumOfSlide)) {
          bullet.classList.add('active')
        }

        if (bullet.classList.contains('active')) {
          if (!bullet.classList.contains(currentNumOfSlide)) {
            bullet.classList.remove('active')
          }
        }
      })
    }

    if (currentNumOfSlide == 1) {
      arrowStepBack.classList.add('disabled');
    }

    if (currentNumOfSlide !== numOfSlides) {
      arrowStepNext.classList.remove('disabled');
    }
  })

}
