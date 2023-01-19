import { customElement, ICustomElementViewModel } from 'aurelia';

import './quote.scss';

import template from 'bundle-text:./quote.html';
@customElement({ name: 'quote', template })
export class Quote implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
