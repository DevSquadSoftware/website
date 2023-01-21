import { customElement, ICustomElementViewModel } from 'aurelia';

import './contact.scss';

import template from 'bundle-text:./contact.html';
@customElement({ name: 'contact', template })
export class ContactUs implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }

  handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const myForm = event.target as HTMLFormElement;
    const formData = [['form-name', 'contact'], ...new FormData(myForm)] as [string, string][];

    void fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });
  };
}
