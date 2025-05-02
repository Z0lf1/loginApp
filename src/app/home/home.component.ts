import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,RouterLink} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioService } from '../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [
 ///   RouterLink,
    CommonModule,
    MatButtonModule,
   
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   constructor(private usuarioService: UsuarioService, private router:Router, private snackBar: MatSnackBar)
   {
    
    
   }
 async volverAlLogin(){
   const respuesta= await this.usuarioService.logout();
   if(respuesta.ok){
    this.snackBar.open(
      `Cerrando secion correctamente. Volviendo al login...`,
      'Cerrar',
      {
        duration: 3000,
        verticalPosition: 'bottom', // Cambia la posición a la parte inferior
        horizontalPosition: 'center', // Opcional, para centrarlo horizontalmente
        panelClass: ['success-snackbar'],
      }
    );
   this.router.navigate(['/login']);
  }else{
    this.snackBar.open(`Error: ${respuesta.error}`, 'Cerrar', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'bottom', // Cambia la posición a la parte inferior
      horizontalPosition: 'center', // Opcional, para centrarlo horizontalmente
    });
  }
  }
}
