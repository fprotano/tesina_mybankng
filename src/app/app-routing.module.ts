import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { RegistrazioneAccountComponent } from './components/account/registrazione-account/registrazione-account.component';
import { LoginAccountComponent } from './components/account/login-account/login-account.component';
import { HomeComponent } from './components/account/home/home.component';
import { HelpCenterComponent } from './components/helpCenter/help-center/help-center.component';
import { ListFaqComponent } from './components/faq/list-faq/list-faq.component';
import { VisualizzaInformazioniComponent } from './components/account/visualizza-informazioni/visualizza-informazioni.component';
import { CambiaPasswordComponent } from './components/account/cambia-password/cambia-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PagamentoEseguitoComponent } from './components/pagamento-eseguito/pagamento-eseguito.component';
import { PagamentoEsternoEseguitoComponent } from './components/pagamento-esterno-eseguito/pagamento-esterno-eseguito.component';
import { HelpCenterThreadComponent } from './components/help-center-thread/help-center-thread.component';
import { TransazioneEsternaComponent } from './components/transazione-esterna/transazione-esterna.component';


const routes: Routes = [
	  {path: '', redirectTo: '/login-account', pathMatch: 'full'}
	, { path: "registrazione-account", component: RegistrazioneAccountComponent }
	, { path: "login-account", component: LoginAccountComponent }
	, { path: "home", component: HomeComponent }
	, { path: "help-center", component: HelpCenterComponent }
	, { path: "list-faq", component: ListFaqComponent }
	, { path: "Inf-personali-account", component:  VisualizzaInformazioniComponent}
	, { path: "cambia-password",component:CambiaPasswordComponent }
	, { path: "payment",component:PaymentComponent }
	, { path: "init-payment/:id",component:LoginAccountComponent }
	, { path: "pagamentoeseguito",component:PagamentoEseguitoComponent }
	, { path: "pagamentoEsternoEseguito",component:PagamentoEsternoEseguitoComponent }
	, { path: "helpCenterThread",component:HelpCenterThreadComponent }
	, { path: "transazione-esterna", component:TransazioneEsternaComponent }
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
