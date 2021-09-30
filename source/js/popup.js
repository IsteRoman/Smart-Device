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

export {workHeader};
