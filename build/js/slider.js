var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  freeMode: true,
  breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 10,
      }
    },
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});

var mySwiper = new Swiper('.swiper-container-s2', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 6
      }
    },
    navigation: {
    nextEl: '.swiper-button-next-s2',
    prevEl: '.swiper-button-prev-s2',
  },
});

var mySwiper = new Swiper('.swiper-container-s3', {
    speed: 400,
    slidesPerView: "2",
    spaceBetween: 32,
    loop: !0,
    breakpoints: {
      768: {
        slidesPerView: "1",
        spaceBetween: 6
      }
    },
    watchSlidesVisibility: true,
  watchSlidesProgress: true,
    navigation: {
    nextEl: '.swiper-button-next-s3',
    prevEl: '.swiper-button-prev-s3',
  },
});

var elements = document.querySelectorAll('input[type="tel"]');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7 }(000) 000 - 00 - 00',
  });
};

window.addEventListener('scroll', function() {
  var header = document.querySelector(".header");
  var oldScrollY = 0;
  var scrolled = window.pageYOffset;

  oldScrollY = scrolled;

  if ( oldScrollY > 31 ) {
    header.className = "header fixed-header";
  } else {
      header.className = "header";
    }
});

var buttonOrderOpen = document.querySelector('.s-additions__button');
var buttonOrderClose = document.querySelector('.s-additions__form-close');
var formOrderProject = document.querySelector('.s-additions__form');
var textOrderProject = document.querySelector('.s-additions__offer-text');

buttonOrderOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  // formOrderProject.style.display = 'block';
  buttonOrderClose.style.display = 'block'
  textOrderProject.style.display = 'none';
  formOrderProject.classList.add('active');
  formOrderProject.classList.remove('close');
});

buttonOrderClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  // formOrderProject.style.display = 'none';
  textOrderProject.style.display = 'block';
  buttonOrderClose.style.display = 'none'
  formOrderProject.classList.remove('active');
  formOrderProject.classList.add('close');
});

const buttonHidden = document.querySelector('.s-block__more');
const catalog = document.querySelector('.s-block__catalog');
const buttonHiddenText = document.querySelector('.s-block__more-close-text');
const linkHiddenText = document.querySelector('.s-block__more-close-text');

buttonHidden.addEventListener('click', function () {
  buttonHidden.classList.toggle('active');
  catalog.classList.toggle('active');

  if (buttonHidden.classList.contains('active')) {
    buttonHiddenText.innerHTML = 'Развернуть блок';
  } else {
    buttonHiddenText.innerHTML = 'Свернуть блок';
  }
});

linkHiddenText.addEventListener('click', function () {
  buttonHidden.classList.toggle('active');
  catalog.classList.toggle('active');

  if (buttonHidden.classList.contains('active')) {
    buttonHiddenText.innerHTML = 'Развернуть блок';
  } else {
    buttonHiddenText.innerHTML = 'Свернуть блок';
  }
});

var buttonConfigAdd = document.querySelector('.s-total__more-title');
var buttonConfigDel = document.querySelector('.s-total__info-button');


buttonConfigAdd.addEventListener('click', function () {
  var blockInner = document.querySelector('.s-total');
  var blockInnerPre = document.querySelector('.s-total__more');
  var element = document.querySelector('.s-total__info');
  var cloneElement = element.cloneNode(true)
  var fragment = document.createDocumentFragment();

    cloneElement.classList.remove('active');

    fragment.appendChild(cloneElement);

    blockInnerPre.before(fragment);
});

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('s-total__info-button')) {
    evt.target.parentNode.remove();
  }
});

