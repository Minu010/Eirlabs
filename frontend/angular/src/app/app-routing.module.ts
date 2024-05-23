import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'ayuda', component: AyudaComponent},

  // Otras rutas aquí si las tienes
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al componente de inicio de sesión por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
