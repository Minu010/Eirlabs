// frontend/angular/src/app/auth/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser!: FormGroup;
email: any;
password: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  procesar(event: Event) {
    event.preventDefault();
    if (this.formUser.valid) {
      console.log("Datos del formulario:", this.formUser.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    }
  }
}
