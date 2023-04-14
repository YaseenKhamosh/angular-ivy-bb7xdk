import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOneRoutingModule } from './module-one-routing.module';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
@NgModule({
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ],
  declarations: [TestOneComponent, TestTwoComponent]
})
export class ModuleOneModule { }