import { customElement, ICustomElementViewModel } from 'aurelia';
import { IRouter } from '@aurelia/router';

import './navigation.scss';

import template from 'bundle-text:./navigation.html';
import Navbar from 'mdb-ui-kit/src/mdb/js/pro/navbar';
@customElement({ name: 'navigation', template })
export class Navigation implements ICustomElementViewModel {
  nav: undefined | HTMLElement;
  constructor(@IRouter private readonly router: IRouter) {
    // you can inject the element or any DI in the constructor
  }

  get route() {
    if (!this.router.activeNavigation) return '';
    return this.router.activeNavigation.path;
  }

  get classes() {
    return {
      'fixed-top': this.route === '/' || this.route === '/home',
      'navbar-scroll': this.route === '/',
    };
  }

  attaching() {
    if (!this.nav) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    new Navbar(this.nav).init();
  }
}
