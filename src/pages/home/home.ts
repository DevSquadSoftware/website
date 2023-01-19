import { customElement, ICustomElementViewModel } from 'aurelia';

import './home.scss';

import template from 'bundle-text:./home.html';
@customElement({ name: 'home', template })
export class Home implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
