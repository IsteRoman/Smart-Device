import { body } from  './start.js';
const ESC_CODE = 27;
const TAB_CODE = 9;
const buttonOpenModal = document.querySelector('.header__popup-button');
const popupForm = document.querySelector('.popup__form');
const buttonCloseModal = document.querySelector('.popup__button-close');

const closeBlock = () => {
  body.classList.remove('popup--open');
  body.removeAttribute('style');
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

export {workPopup};
