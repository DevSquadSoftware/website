import { customElement, ICustomElementViewModel, IPlatform } from 'aurelia';
import { IRouterEvents } from '@aurelia/router-lite';

import './navigation.scss';

import template from 'bundle-text:./navigation.html';
import Navbar from 'mdb-ui-kit/src/mdb/js/pro/navbar';
@customElement({ name: 'navigation', template })
export class Navigation implements ICustomElementViewModel {
  nav?: HTMLElement;
  route?: string;

  constructor(@IPlatform private readonly platform: IPlatform, @IRouterEvents private readonly routerEvents: IRouterEvents) {
    this.routerEvents.subscribe('au:router:navigation-end', (x) => {
      this.route = this.platform.location.pathname;
    });
  }

  get classes() {
    return {
      'fixed-top': this.route === '/' || this.route === '/home',
      'navbar-scroll': this.route === '/',
    };
  }

  attaching() {
    new Navbar(this.nav).init();
  }
}
