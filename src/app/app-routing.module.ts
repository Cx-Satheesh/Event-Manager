import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/web-app/home/home.component';

const routes: Routes = [
  // web-app views
  { 
    path: '', loadChildren: () => import('./views/web-app/web-app.module').then(m => m.WebAppModule) 
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
