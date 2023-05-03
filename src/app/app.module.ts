import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLessorComponent } from './components/header-lessor/header-lessor.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { AddAdvertisementComponent } from './components/add-advertisement/add-advertisement.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import { UserLessorProfileComponent } from './components/user-lessor-profile/user-lessor-profile.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLessorComponent,
    AddAdvertisementComponent,
    UserLessorProfileComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatSelectModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
