import { customElement, ICustomElementViewModel } from 'aurelia';

import './contact.scss';

import template from 'bundle-text:./contact.html';

@customElement({ name: 'contact', template })
export class ContactUs implements ICustomElementViewModel {
  handleSubmit(event: SubmitEvent) {
    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm) as unknown;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as [string, string][]).toString(),
    })
      .then(() => alert('Thank you for your submission'))
      .catch((error) => alert(error));
  }
}
