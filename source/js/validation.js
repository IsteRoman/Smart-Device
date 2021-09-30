const ZERO_VALUE = 0;
const MIN_NAME_LENGTH = 2;
const PHONE_LENGTH = 17;
const forms = document.querySelectorAll('form');
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
  forms.forEach((el) => {
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

export {workForm};
