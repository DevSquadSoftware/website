import { customElement, ICustomElementViewModel } from 'aurelia';

import './career.scss';

import template from 'bundle-text:./career.html';
import { route } from '@aurelia/router-lite';
@customElement({ name: 'career', template, aliases: ['careers'] })
export class Career implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }
}
