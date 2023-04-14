import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
const routes: Routes = [
  {path: 'one', component: TestOneComponent},
  {path: 'two', component: TestTwoComponent},
  {path: '**', redirectTo: 'one'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule { }
