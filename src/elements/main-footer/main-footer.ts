import { customElement, ICustomElementViewModel } from 'aurelia';

import './main-footer.scss';

import template from 'bundle-text:./main-footer.html';
@customElement({ name: 'main-footer', template })
export class MainFooter implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
