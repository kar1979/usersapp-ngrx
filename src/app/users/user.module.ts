import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AddUserComponent } from './user-add/add-user.component';
import { FooterUserComponent } from './user-footer/footer-user.component';
import { ItemUserComponent } from './user-item/item-user.component';
import { ListUserComponent } from './user-list/list-user.component';
import { PageUserComponent } from './user-page/page-user.component';
import { DefFilterPipe } from './def-filter.pipe';

@NgModule({
  declarations: [
    AddUserComponent,
    FooterUserComponent,
    ItemUserComponent,
    ListUserComponent,
    PageUserComponent,
    DefFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UserModule { }
