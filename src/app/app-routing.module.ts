import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LaptopComponent } from './pages/home/home-page/laptop/laptop.component';
import { DellComponent } from './pages/home/home-page/laptop/product-type/dell/dell.component';
import { HpComponent } from './pages/home/home-page/laptop/product-type/hp/hp.component';
import { ListPhoneComponent } from './pages/home/home-page/phone/list-phone/list-phone.component';
import { PhoneComponent } from './pages/home/home-page/phone/list-phone/phone-product/phone.component';
// import { PhoneComponent } from './pages/home/home-page/phone/phone.component';
import { IphoneComponent } from './pages/home/home-page/phone/product-type/iphone/iphone.component';
import { Iphone7Component } from './pages/home/home-page/phone/product-type/iphone/iphone7/iphone7.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'laptop', component: LaptopComponent },

  {
    path: 'laptop',
    children: [
      { path: 'dell', component: DellComponent },
      { path: 'hp', component: HpComponent },
    ],
  },
  { path: 'phone', component: ListPhoneComponent },
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
