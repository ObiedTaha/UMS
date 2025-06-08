import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {AddEditComponent} from './components/add-edit/add-edit.component';
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [

  {path: '', component: UsersComponent},
  {path: 'add', component: AddEditComponent},
  {path: 'edit/:id', component: AddEditComponent},
  {path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
