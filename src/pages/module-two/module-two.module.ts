import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ComComponent } from './com/com.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ],
  declarations: [ComComponent]
})
export class ModuleTwoModule { }