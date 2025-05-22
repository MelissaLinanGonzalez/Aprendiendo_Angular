import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
