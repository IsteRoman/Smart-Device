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

export {workAccordion};
