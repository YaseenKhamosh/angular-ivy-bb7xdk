import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComComponent } from './com/com.component';
const routes: Routes = [
  {path: '', component: ComComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule { }
