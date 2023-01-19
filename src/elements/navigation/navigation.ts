import { customElement, ICustomElementViewModel } from 'aurelia';

import './navigation.scss';

import template from 'bundle-text:./navigation.html';
@customElement({ name: 'navigation', template })
export class Navigation implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
