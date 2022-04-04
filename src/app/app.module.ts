import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './share/not-found/not-found.component';
import { MaterialModule } from './share/module/material.mudule';
import { ItemSidebarComponent } from './pages/side-bar/item-sidebar/item-sidebar.component';
import { DellComponent } from './pages/category/laptop/product-type/dell/dell.component';
import { Iphone7Component } from './pages/category/phone/product-type/iphone/iphone7/iphone7.component';
import { IphoneComponent } from './pages/category/phone/product-type/iphone/iphone.component';

import { ListPhoneComponent } from './pages/category/phone/list-phone/list-phone.component';
import { PhoneComponent } from './pages/category/phone/list-phone/phone-product/phone.component';
import { ListLaptopComponent } from './pages/category/laptop/list-laptop/list-laptop.component';
import { LaptopComponent } from './pages/category/laptop/list-laptop/laptop/laptop.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPhoneComponent } from './pages/category/phone/list-phone/phone-product/detail-phone/detail-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    NavBarComponent,
    NotFoundComponent,
    ItemSidebarComponent,
    PhoneComponent,
    LaptopComponent,
    DellComponent,
    ListPhoneComponent,
    IphoneComponent,
    Iphone7Component,
    ListLaptopComponent,
    DetailPhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
