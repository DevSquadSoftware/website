import { ICustomElementViewModel, customElement } from 'aurelia';
import template from 'bundle-text:./main-footer.html';
import './main-footer.scss';
@customElement({name:'main-footer', template})
export class MainFooter implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
   }
}
