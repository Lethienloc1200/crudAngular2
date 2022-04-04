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
// import { PhoneComponent } from './pages/home/home-page/phone/phone.component';
import { LaptopComponent } from './pages/home/home-page/laptop/laptop.component';
import { DellComponent } from './pages/home/home-page/laptop/product-type/dell/dell.component';
import { ListPhoneComponent } from './pages/home/home-page/phone/list-phone/list-phone.component';
import { IphoneComponent } from './pages/home/home-page/phone/product-type/iphone/iphone.component';
import { Iphone7Component } from './pages/home/home-page/phone/product-type/iphone/iphone7/iphone7.component';
import { PhoneComponent } from './pages/home/home-page/phone/list-phone/phone-product/phone.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
