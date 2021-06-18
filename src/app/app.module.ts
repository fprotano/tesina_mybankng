import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';

import { HttpClientModule } from '@angular/common/http';

import { RegistrazioneAccountComponent } from './components/account/registrazione-account/registrazione-account.component';
import { LoginAccountComponent } from './components/account/login-account/login-account.component';
import { HomeComponent } from './components/account/home/home.component';

import { HelpCenterComponent } from './components/helpCenter/help-center/help-center.component';
import { ListFaqComponent } from './components/faq/list-faq/list-faq.component';
import { VisualizzaInformazioniComponent } from './components/account/visualizza-informazioni/visualizza-informazioni.component';
import { CambiaPasswordComponent } from './components/account/cambia-password/cambia-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PagamentoEseguitoComponent } from './components/pagamento-eseguito/pagamento-eseguito.component';
import { HelpCenterThreadComponent } from './components/help-center-thread/help-center-thread.component';


@NgModule({
  declarations: [
    AppComponent,

    NavComponent,

    RegistrazioneAccountComponent,
    LoginAccountComponent,
    HomeComponent,
    HelpCenterComponent,

    ListFaqComponent,
    VisualizzaInformazioniComponent,
    CambiaPasswordComponent,
    PaymentComponent,
    PagamentoEseguitoComponent,
    HelpCenterThreadComponent


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
