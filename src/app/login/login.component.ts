import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import{Router, RouterLink} from'@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const {email,password}=this.loginForm.value;
      console.log(email,password);
      this.usuarioService.login(email,password)
     }
  }
  irARegistro(): void {
    this.router.navigate(['/register']);
  }
  onClickPrecarga(nombre:string):void{
    if(nombre=="Juan"){
      this.loginForm.setValue({email:'elmaildejuan@hotmail.com', password:'laPassDeJuan'})
    }else if(nombre=="Laura"){
      this.loginForm.setValue({email:'elmaildelaura@hotmail.com',password:'laPassDeLaura'})
    }else{
      this.loginForm.setValue({email:'elmailderogelio@hotmail.com',password:'laPassDeRogelio'})
    }
 
  }
  
}

