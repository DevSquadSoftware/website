import { customElement, ICustomElementViewModel } from 'aurelia';
import { IRouteContext, route } from '@aurelia/router-lite';

import './about.scss';

import template from 'bundle-text:./about.html';
@customElement({ name: 'about', template })
@route({
  path: ['about', 'about/:id'],
})
export class About implements ICustomElementViewModel {
  constructor(@IRouteContext private readonly context: IRouteContext) {}
}
