import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './pages/category/laptop/detail-product/detail-product.component';
// import { LaptopComponent } from './pages/category/laptop/laptop.component';
import { ListLaptopComponent } from './pages/category/laptop/list-laptop/list-laptop.component';
import { DellComponent } from './pages/category/laptop/product-type/dell/dell.component';
import { HpComponent } from './pages/category/laptop/product-type/hp/hp.component';
import { ListPhoneComponent } from './pages/category/phone/list-phone/list-phone.component';
import { DetailPhoneComponent } from './pages/category/phone/list-phone/phone-product/detail-phone/detail-phone.component';
import { IphoneComponent } from './pages/category/phone/product-type/iphone/iphone.component';
import { Iphone7Component } from './pages/category/phone/product-type/iphone/iphone7/iphone7.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'laptop', component: ListLaptopComponent },

  {
    path: 'laptop',
    children: [
      { path: 'dell', component: DellComponent },
      { path: 'hp', component: HpComponent },
    ],
  },
  { path: 'laptop/:id', component: DetailProductComponent },
  { path: 'phone', component: ListPhoneComponent },
  { path: 'phone/:id', component: DetailPhoneComponent },
  {
    path: 'phone',
    children: [
      { path: 'iphone', component: IphoneComponent },
      {
        path: 'iphone',
        children: [{ path: 'iphone7', component: Iphone7Component }],
      },
    ],
  },

  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
