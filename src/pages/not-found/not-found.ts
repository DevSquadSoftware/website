
import { customElement } from 'aurelia';
import template from 'bundle-text:./not-found.html'
import './not-found.scss';
@customElement({name:'not-found', template})
export class NotFound {
  public static parameters = ['id'];
  public missingComponent: string ;

  public load(parameters: {id: string}): void {
    this.missingComponent = parameters.id;
  }
}
