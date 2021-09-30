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

export {workAccordion};
