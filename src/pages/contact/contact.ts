import { customElement, ICustomElementViewModel } from 'aurelia';

import './contact.scss';

import template from 'bundle-text:./contact.html';
@customElement({ name: 'contact', template })
export class ContactUs implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
