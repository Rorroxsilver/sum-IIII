import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  { path: 'task', loadChildren: () => import('../task/task.module').then(m => m.TaskModule) },
];



@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: Tab1Page }])],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
