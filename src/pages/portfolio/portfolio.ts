import { customElement, ICustomElementViewModel } from 'aurelia';

import './portfolio.scss';

import template from 'bundle-text:./portfolio.html';
@customElement({ name: 'portfolio', template, aliases: ['portfolios'] })
export class Portfolio implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
