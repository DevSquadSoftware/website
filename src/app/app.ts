import { customElement } from 'aurelia';

import './app.scss';

import template from 'bundle-text:./app.html';
import { route, Routeable, RouteableComponent } from '@aurelia/router-lite';
import * as pages from '../pages';

@route({ fallback: 'not-found', routes: Object.keys(pages).map((x) => (pages as Record<string, RouteableComponent>)[x]) })
@customElement({ name: 'app', template })
export class App {}
