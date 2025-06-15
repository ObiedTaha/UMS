import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    ToastrModule.forRoot({})
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class SharedModule { }
