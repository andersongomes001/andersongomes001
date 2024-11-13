import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup,FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  send_success: boolean = false;
  send_error: boolean = false;  
  private timeout: number = 60000;
  SERVICE_ID: string =  "service_nn5qh3d";
  TEMPLATE_ID: string = "template_4mkdsgd";
  PUBLIC_KEY: string = "fN97fw1nW4YL8yLdf";

  contactForm: FormGroup = new FormGroup({
    from_name: new FormControl('', [Validators.required]),
    from_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  public sendEmail(e: Event) {
    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, this.contactForm.value, {
      publicKey: this.PUBLIC_KEY,
    })
    .then(
      () => {
        this.send_success = true;
        setTimeout(() => {
          this.send_success = false;
        }, this.timeout);
      },
      (error) => {
        this.send_error = true;
        setTimeout(() => {
          this.send_error = false;
        }, this.timeout);;
      },
    );
  }
  getError(controlName: string): string | null {
    const control = this.contactForm.get(controlName);

    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    if (controlName === 'from_email' && control?.hasError('email')) {
      return 'Insira um email válido';
    }

    return null;
  }
}
