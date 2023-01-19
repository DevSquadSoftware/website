import { ICustomElementViewModel, customElement } from 'aurelia';
import template from 'bundle-text:./main-nav.html';
import './main-nav.scss';
@customElement({name:'main-nav', template})
export class MainNav implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
   }
}
