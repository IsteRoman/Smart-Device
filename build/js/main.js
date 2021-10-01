/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./source/js/popup.js
const ESC_CODE = 27;
const body = document.querySelector('body');
const buttonOpenModal = document.querySelector('.header__popup-button');
const overlay = document.querySelector('.overlay');
const popupForm = document.querySelector('.popup__form');
const buttonCloseModal = document.querySelector('.popup__button-close');

const checkJS = () => {
  body.classList.remove('no-js');
};

const openPopup = () => {
  buttonOpenModal.addEventListener('click', () => {
    body.classList.add('popup--open');
    popupForm.children[1].focus();
  });
};

const closeBlock = () => {
  body.classList.remove('popup--open');
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

const closeByOverlay = () => {
  overlay.addEventListener('click', () => {
    closeBlock();
  });
};

const workHeader = () => {
  checkJS();
  openPopup();
  closeByEsc();
  closeByButton();
  closeByOverlay();
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
const accordionButton = document.querySelectorAll('.footer__main-info-button');

const workAccordion = () => {
  accordionButton.forEach((el) => {
    el.addEventListener('click', (evt) => {
      accordionList.forEach((list) => {
        if (list !== evt.target.parentElement) {
          list.classList.remove('footer__main-info-item--open');
        }
      });
      el.parentElement.classList.toggle('footer__main-info-item--open');
    });
  });
};



;// CONCATENATED MODULE: ./source/js/main.js




workHeader();
workForm();
workAccordion();

/******/ })()
;