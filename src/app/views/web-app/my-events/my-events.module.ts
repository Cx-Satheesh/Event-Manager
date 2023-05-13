import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEventsRoutingModule } from './my-events-routing.module';
import { MyEventsComponent } from './my-events.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';


@NgModule({
  declarations: [
    MyEventsComponent
  ],
  imports: [
    CommonModule,
    MyEventsRoutingModule,
    LayoutsModule
  ]
})
export class MyEventsModule { }
