import {workHeader} from './popup.js';
import {workForm} from './validation.js';
import {workAccordion} from './accordion.js';

const err = 1;


if(document.querySelector('.header')) {
  workHeader();
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
