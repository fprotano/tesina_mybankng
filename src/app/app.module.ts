import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { NavComponent } from './components/nav/nav.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrazioneComponent } from './components/Staff/registrazione/registrazione.component';
import { HomestaffComponent } from './components/Staff/homestaff/homestaff.component';
import { LoginComponent } from './components/Staff/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    FakeInsertComponent,
    NavComponent,
    FakeLoginComponent,
    FakeLogoutComponent,
    RegistrazioneComponent,
    HomestaffComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
