import { customElement, ICustomElementViewModel } from 'aurelia';

import './home.scss';

import template from 'bundle-text:./home.html';
import { route } from '@aurelia/router-lite';
@customElement({ name: 'home', template })
@route({ path: '' })
export class Home implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
