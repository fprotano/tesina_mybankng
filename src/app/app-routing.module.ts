import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';
import { RegistrazioneComponent } from './components/Staff/registrazione/registrazione.component';
import { HomestaffComponent } from './components/Staff/homestaff/homestaff.component';


const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path:"register",component: RegistrazioneComponent}
  ,{path:"homestaff",component:HomestaffComponent}
  ,{path:"fake",component:FakeComponent}
  ,{path:"fake-insert",component:FakeInsertComponent}
   ,{path:"fake-login",component:FakeLoginComponent}
   ,{path:"fake-logout",component:FakeLogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
