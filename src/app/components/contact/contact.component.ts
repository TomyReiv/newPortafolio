import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  value: any = '';
  enviado: boolean = false;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  validField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  fieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `*This field is required`;
        case 'minlength':
          return `Min ${errors['minlength'].requiredLength} caraters`;
      }
    }
    return null;
  }

 async send() {
  
    if (this.myForm.valid) {
      
      emailjs.init('BMIJ1RWt6WFLGxBkq');
      let result = await emailjs.send('service_egcfko9', 'template_lqyvzig', {
        from_name: this.myForm.value.name,
        message: this.myForm.value.message,
        email_id: this.myForm.value.email,
      });
      this.enviado = true;
      setTimeout( () => {
        this.enviado = false;
      },5000)
    }
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }

  constructor(private fb: FormBuilder) {}
}
