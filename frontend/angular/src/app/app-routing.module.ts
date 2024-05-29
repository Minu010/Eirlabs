import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { AyudaComponent } from './features/ayuda/ayuda.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige al componente de inicio de sesión por defecto
  { path: '**', redirectTo: '/error' } // Ruta comodín para páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
