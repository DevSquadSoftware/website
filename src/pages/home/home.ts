
import { customElement, ICustomElementViewModel } from 'aurelia';
import template from 'bundle-text:./home.html'
import './home.scss';
@customElement({name:'home', template})
export class Home implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
   }
}
