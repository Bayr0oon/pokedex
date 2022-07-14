import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PDetailComponent } from './components/p-detail/p-detail.component';
import { PTableComponent } from './components/p-table/p-table.component';

const routes: Routes = [
  {path: 'home', component: PTableComponent},
  {path: 'pDetail/:id', component: PDetailComponent},
  {path: '',pathMatch: 'full', redirectTo:'home'},
  {path: '**',pathMatch: 'full', redirectTo:'home'}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
