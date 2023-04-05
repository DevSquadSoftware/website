import { customElement } from 'aurelia';
import { route, RouteableComponent } from '@aurelia/router-lite';

import * as pages from '../pages';

import './app.scss';

import template from 'bundle-text:./app.html';

@route({ fallback: 'not-found', routes: Object.keys(pages).map((x) => (pages as Record<string, RouteableComponent>)[x]) })
@customElement({ name: 'app', template })
export class App {}
