import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get firstName() {
    return this.formUser.get('firstName');
  }

  get lastName() {
    return this.formUser.get('lastName');
  }

  get phone() {
    return this.formUser.get('phone');
  }

  get email() {
    return this.formUser.get('email');
  }

  get password() {
    return this.formUser.get('password');
  }

  get confirmPassword() {
    return this.formUser.get('confirmPassword');
  }

  register($event: Event) {
    if (this.formUser.valid) {
      // Enviar los datos del formulario al servidor
      this.apiService.registrarUsuario(this.formUser.value).subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          // Manejar la respuesta del servidor según sea necesario
        },
        error => {
          console.error('Error al enviar los datos:', error);
          // Manejar el error según sea necesario
        }
      );
    }
  }
}
