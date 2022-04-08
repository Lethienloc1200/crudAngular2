import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/share/module/material.mudule';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from '../home-admin/home-admin.component';
import { AddFormComponent } from '../home-admin/add-form/add-form.component';
import { ListProductComponent } from '../home-admin/list-product/list-product.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { RadioButtonModule } from 'primeng/radiobutton';
import { EditFormComponent } from '../home-admin/edit-form/edit-form.component';
const routesAdmin: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homeAdmin', component: HomeAdminComponent },
  {
    path: 'homeAdmin',
    children: [
      { path: 'list', component: ListProductComponent },
      { path: 'add', component: AddFormComponent },
      { path: 'edit/:id', component: EditFormComponent },
    ],
  },
  // { path: 'laptop/:id', component: DetailProductComponent },
  // { path: 'phone', component: ListPhoneComponent },
  // { path: 'phone/:id', component: DetailPhoneComponent },
  // {
  //   path: 'phone',
  //   children: [
  //     { path: 'iphone', component: IphoneComponent },
  //     {
  //       path: 'iphone',
  //       children: [{ path: 'iphone7', component: Iphone7Component }],
  //     },
  //   ],

  // { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    MaterialModule,
    RouterModule.forChild(routesAdmin),
  ],
})
export class AdminModule {}
