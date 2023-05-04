import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {  PerfilComponent} from "./components/perfil/perfil.component";
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { RouterModule, Routes} from "@angular/router";

const routes: Routes=[
  {path: '',redirectTo: '/principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'edit-profile', component: PerfilComponent},
  {path: 'see-profile', component:SeeProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    PerfilComponent,
    SeeProfileComponent,
    HeaderProfileComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
