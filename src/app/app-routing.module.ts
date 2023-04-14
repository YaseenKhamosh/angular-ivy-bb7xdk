import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleOneModule } from '../pages/module-one/module-one.module';
import { ModuleTwoModule } from '../pages/module-two/module-two.module';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'one', loadChildren: () => ModuleOneModule },
      { path: 'two', loadChildren: () => ModuleTwoModule },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
