import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactoForm!: FormGroup;
  formErrors: any = {
    name: '',
    email: '',
    message: ''
  };
  validationMessages: any = {
    name: {
      required: 'El nombre es obligatorio.'
    },
    email: {
      required: 'El correo electrónico es obligatorio.',
      email: 'Por favor, introduce un correo electrónico válido.'
    },
    message: {
      required: 'El mensaje es obligatorio.'
    }
  };

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.contactoForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.contactoForm.valueChanges.subscribe(() => this.onValueChanged());
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(): void {
    if (!this.contactoForm) {
      return;
    }
    const form = this.contactoForm;
  
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        // Clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
  
        if (control && control.dirty && !control.valid) {
          control.setErrors({ 'invalid': true }); // Set 'invalid' error to control
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  

  enviarFormulario() {
    if (this.contactoForm && this.contactoForm.valid) {
      // Tu lógica de envío de formulario aquí
    } else {
      console.error('El formulario no es válido o no está inicializado.');
    }
  }
}
