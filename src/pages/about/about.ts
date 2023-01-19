import { customElement, ICustomElementViewModel } from 'aurelia';

import './about.scss';

import template from 'bundle-text:./about.html';
@customElement({ name: 'about', template })
export class About implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
