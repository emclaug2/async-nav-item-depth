import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DrawerBodyModule, DrawerFooterModule, DrawerHeaderModule, DrawerLayoutModule,
  DrawerModule, DrawerNavGroupModule, DrawerNavItemModule, DrawerSubheaderModule } from './core/drawer/public-api';

import { AppComponent } from './app.component';
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrawerModule,
    DrawerHeaderModule,
    DrawerSubheaderModule,
    DrawerLayoutModule,
    DrawerBodyModule,
    DrawerNavGroupModule,
    MatExpansionModule,
    DrawerNavItemModule,
    DrawerFooterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
