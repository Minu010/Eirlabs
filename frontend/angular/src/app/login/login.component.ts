import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser!: FormGroup; // Agrega el signo de exclamación para indicar que la inicialización se realizará en el constructor

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get password() {
    return this.formUser.get('password') as FormControl;
  }

  procesar(event: Event) {
    event.preventDefault();
    console.log("Datos del formulario:", this.formUser.value);
  }
}