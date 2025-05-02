import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroComponent} from './registro/registro.component'
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'register', component: RegistroComponent},
    {path:'home', component:HomeComponent}
];

  export class AppRoutingModule {}