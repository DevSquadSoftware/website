import { customElement, ICustomElementViewModel } from 'aurelia';

import './services.scss';

import template from 'bundle-text:./services.html';
@customElement({ name: 'services', template })
export class Services implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
