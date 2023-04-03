import { customElement, ICustomElementViewModel } from 'aurelia';

import { encode } from '../../commonts';

import './contact.scss';

import template from 'bundle-text:./contact.html';
import 'url:./contact.html';
@customElement({ name: 'contact', template })
export class ContactUs implements ICustomElementViewModel {
  constructor() {
    // you can inject the element or any DI in the constructor
  }

  async handleSubmit(event: SubmitEvent) {
    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm) as unknown;
    console.log(new URLSearchParams(formData as [string,string][]).toString())
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as [string,string][]).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      
}
