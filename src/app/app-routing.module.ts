import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtelekComponent } from './etelek/etelek.component';
import { ItalokComponent } from './italok/italok.component';
import { BemutatkozasComponent } from './bemutatkozas/bemutatkozas.component';

const routes: Routes = [
  {path:"etelek", component:EtelekComponent},
  {path:"italok", component:ItalokComponent},
  {path:"rolunk", component:BemutatkozasComponent},
  {path:" ", component:BemutatkozasComponent},
  {path:"**", component:BemutatkozasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
