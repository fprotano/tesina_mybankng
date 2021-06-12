import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';

import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';
import { RegistrazioneComponent } from './components/Staff/registrazione/registrazione.component';
import { HomestaffComponent } from './components/Staff/homestaff/homestaff.component';
import { RegistrazioneAccountComponent } from './components/account/registrazione-account/registrazione-account.component';
import { LoginAccountComponent } from './components/account/login-account/login-account.component';
import { LoginComponent } from './components/Staff/login/login.component';
import { HomeComponent } from './components/account/home/home.component';
import { HelpCenterComponent } from './components/helpCenter/help-center/help-center.component';
import { ListExternalTransactionsComponent } from './components/Staff/externalTransactions/list-external-transactions/list-external-transactions.component';
import { ListFaqComponent } from './components/faq/list-faq/list-faq.component';
import { AddFaqComponent } from './components/faq/add-faq/add-faq.component';
import { VisualizzaInformazioniComponent } from './components/account/visualizza-informazioni/visualizza-informazioni.component';


const routes: Routes = [
	// {path: '', redirectTo: '/register', pathMatch: 'full'},
	{ path: "register", component: RegistrazioneComponent }
	,{path:  "login", component: LoginComponent  }
	, { path: "homestaff",  component: HomestaffComponent  }
	, { path: "fake",  component:  FakeComponent }
	, { path: "fake-insert", component: FakeInsertComponent }
	, { path: "fake-login", component: FakeLoginComponent }
	, { path: "fake-logout", component: FakeLogoutComponent }
	, { path: "registrazione-account", component: RegistrazioneAccountComponent }
	, { path: "login-account", component: LoginAccountComponent }
	, { path: "home", component: HomeComponent }
	, { path: "help-center", component: HelpCenterComponent }
	, { path: "Staff/transactions/list", component: ListExternalTransactionsComponent }
	, { path: "list-faq", component: ListFaqComponent }
	, {path: "Inf-personali-account", component:  VisualizzaInformazioniComponent}
	

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
