import {checkJS} from './start.js';
import {workPopup} from './popup.js';
import {workForm} from './validation.js';
import {workAccordion} from './accordion.js';

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
