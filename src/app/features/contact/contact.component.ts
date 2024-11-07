import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  SERVICE_ID: string =  "service_nn5qh3d";
  TEMPLATE_ID: string = "template_4mkdsgd";
  PUBLIC_KEY: string = "fN97fw1nW4YL8yLdf";
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: this.PUBLIC_KEY,
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
