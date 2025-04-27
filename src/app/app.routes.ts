import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroComponent} from './registro/registro.component'
export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'register', component: RegistroComponent}
];

  export class AppRoutingModule {}