import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddEditComponent,
    ProfileComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        NgxPaginationModule
    ]
})
export class UsersModule { }
