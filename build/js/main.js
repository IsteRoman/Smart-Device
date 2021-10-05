/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./source/js/start.js
const body = document.querySelector('body');

const checkJS = () => {
  body.classList.remove('no-js');
};




;// CONCATENATED MODULE: ./source/js/popup.js

const ESC_CODE = 27;
const TAB_CODE = 9;
const HEIGHT_ZERO_POINT = 0;
const HEIGHT_MAX_POINT = 710;
const HEIGHT_TOP = 50;
const DELTA = 100;
const buttonOpenModal = document.querySelector('.header__popup-button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const buttonCloseModal = document.querySelector('.popup__button-close');

const ChaingePopupHeight = () => {
  const height = window.innerHeight - DELTA;
  if (HEIGHT_ZERO_POINT < window.innerHeight < HEIGHT_MAX_POINT) {
    popup.style.height = `${height}px`;
    popup.style.top = `${HEIGHT_TOP}px`;
  }
  if (window.innerHeight >= HEIGHT_MAX_POINT) {
    popup.removeAttribute('style');
  }
};

const closeBlock = () => {
  body.classList.remove('popup--open');
  body.removeAttribute('style');
  popup.removeAttribute('style');
  window.removeEventListener('resize', ChaingePopupHeight);
};

const closeByOverlay = () => {
  if (body.classList.contains('popup--open')) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.popup') === null && e.target.closest('.header__popup-button') === null) {
        closeBlock();
      }
    });
  }
};

const tabFocusRestrictor = () => {
  window.addEventListener('keydown', (evt) => {
    const focused = document.activeElement;
    if (focused === buttonCloseModal && evt.keyCode === TAB_CODE) {
      popupForm.focus();
    }
  });
};

const openPopup = () => {
  buttonOpenModal.addEventListener('click', () => {
    body.classList.add('popup--open');
    popupForm.children[1].focus();
    body.style.overflow = 'hidden';
    window.addEventListener('resize', ChaingePopupHeight);
    tabFocusRestrictor();
    closeByOverlay();
  });
};

const closeByEsc = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESC_CODE) {
      closeBlock();
    }
  });
};

const closeByButton = () => {
  buttonCloseModal.addEventListener('click', () => {
    closeBlock();
  });
};

const workPopup = () => {
  openPopup();
  closeByEsc();
  closeByButton();
};



;// CONCATENATED MODULE: ./source/js/validation.js
const ZERO_VALUE = 0;
const MIN_NAME_LENGTH = 2;
const PHONE_LENGTH = 17;
const validation_forms = document.querySelectorAll('form');
const successBlock = document.querySelector('.success');

const setErrorStyle = (object) => {
  object.style.border = '1px solid rgb(255, 0, 0)';
};

const removeError = (object) => {
  object.removeAttribute('style');
};

const hiddenMessage = () => {
  successBlock.classList.remove('success--show-message');
};

const workForm = () => {
  validation_forms.forEach((el) => {
    const name = el.querySelector('input[type="text"]');
    const tel = el.querySelector('input[type="tel"]');
    const button = el.querySelector('.button-submit');
    const agree = el.querySelector('input[type="checkbox"]');
    const agreeLabel = agree.nextElementSibling;
    el.addEventListener('change', () => {
      name.addEventListener('blur', () => {
        if (name.value.length < MIN_NAME_LENGTH) {
          setErrorStyle(name);
        } else if (name.value.length > MIN_NAME_LENGTH) {
          removeError(name);
        }
        if (name.value.length === ZERO_VALUE) {
          removeError(name);
        }
      });
      tel.addEventListener('blur', () => {
        if (tel.value.length !== PHONE_LENGTH) {
          setErrorStyle(tel);
        } else if (tel.value.length === PHONE_LENGTH) {
          removeError(tel);
        }
        if (tel.value.length === ZERO_VALUE) {
          removeError(tel);
        }
      });
      agreeLabel.addEventListener('blur', () => {
        if (!agree.checked) {
          agreeLabel.style.color = 'red';
        } else if (agree.checked) {
          agreeLabel.removeAttribute('style');
        }
      });
      button.addEventListener('click', (evt) => {
        if (name.hasAttribute('style') || tel.hasAttribute('style')) {
          evt.preventDefault();
        }
      });
    });
    el.addEventListener('submit', (evt) => {
      if (!name.hasAttribute('style') && !tel.hasAttribute('style')) {
        evt.preventDefault();
        localStorage.setItem('name', name.value);
        localStorage.setItem('tel', tel.value);
        successBlock.classList.add('success--show-message');
        setTimeout(hiddenMessage, 1500);
        el.reset();
      }
    });
  });
};



;// CONCATENATED MODULE: ./source/js/accordion.js
const accordionList = document.querySelectorAll('.footer__main-info-item');

const workAccordion = () => {
  accordionList.forEach((element) => {
    element.addEventListener('click', (event) => {
      element.classList.toggle('footer__main-info-item--open');
      accordionList.forEach((el) => {
        if (el !== event.currentTarget) {
          el.classList.remove('footer__main-info-item--open');
        }
      });
    });
  });
};



;// CONCATENATED MODULE: ./source/js/main.js





const err = 1;

if (document.querySelector('body')) {
  checkJS();
} else {
  err + 1;
}


if(document.querySelector('.popup')) {
  workPopup();
} else {
  err + 1;
}

if(document.querySelector('form')) {
  workForm();
} else {
  err + 1;
}

if(document.querySelector('.footer__main-info')) {
  workAccordion();
} else {
  err + 1;
}

/******/ })()
;