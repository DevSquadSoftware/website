import { customElement, ICustomElementViewModel } from 'aurelia';

import './clients.scss';

import template from 'bundle-text:./clients.html';
@customElement({ name: 'clients', template })
export class Clients implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
