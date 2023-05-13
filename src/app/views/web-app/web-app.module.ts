import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebAppComponent } from './web-app.component';
import { WebAppRoutes } from './web-app-routing.module';


@NgModule({
  declarations: [
    WebAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WebAppRoutes)
  ]
})
export class WebAppModule { }
