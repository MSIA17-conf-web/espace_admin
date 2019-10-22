import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { AdminGuardService } from './services/admin/admin-guard.service';


const routes: Routes = [
  { path: '',   redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion',   component: AdminFormComponent },
  { path: 'conferences',   component: ConferencesComponent, canActivate: [AdminGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }