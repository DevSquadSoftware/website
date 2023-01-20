/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { bindable, customElement, ICustomElementViewModel } from 'aurelia';

import 'mdb-ui-kit/src/mdb/js/free/ripple';

import template from 'bundle-text:./form-input.html';
import Input from 'mdb-ui-kit/src/mdb/js/free/input';

@customElement({ name: 'form-input', capture: true, template })
export class FormInput implements ICustomElementViewModel {
  @bindable label?: string;
  @bindable id = '';
  @bindable name = '';
  @bindable mdbOptions: any = {};
  @bindable options?: unknown[];
  @bindable multiline = false;

  formDiv?: HTMLDivElement;
  input?: any;

  attached() {
    this.input = new Input(this.formDiv, this.mdbOptions);
    this.input.init();
  }

  detaching() {
    this.input?.dispose();
  }
}
