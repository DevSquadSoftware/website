import { customElement, ICustomElementViewModel } from 'aurelia';

import './main-nav.scss';

import template from 'bundle-text:./main-nav.html';
@customElement({ name: 'main-nav', template })
export class MainNav implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
