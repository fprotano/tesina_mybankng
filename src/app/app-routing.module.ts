import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';
import { UserComponent } from './components/Staff/user/user.component';
import { RegistrazioneComponent } from './components/Staff/registrazione/registrazione.component';


const routes: Routes = [
  {path:"register",component: RegistrazioneComponent}
  ,{path:"user",component:UserComponent}
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
