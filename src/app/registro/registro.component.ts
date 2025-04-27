import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  async onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      const resultado = await this.usuarioService.register(email, password);

      if (resultado.ok) {
        // todo salió bien
        this.snackBar.open(
          `Usuario ${email} creado correctamente. Volviendo al login...`,
          'Cerrar',
          {
            duration: 3000,
            verticalPosition: 'bottom', // Cambia la posición a la parte inferior
            horizontalPosition: 'center', // Opcional, para centrarlo horizontalmente
            panelClass: ['success-snackbar'],
          }
        );

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      } else {
        this.snackBar.open(`Error: ${resultado.error}`, 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar'],
          verticalPosition: 'bottom', // Cambia la posición a la parte inferior
          horizontalPosition: 'center', // Opcional, para centrarlo horizontalmente
        });
      }
    }
  }

  volverAlLogin(): void {
    this.router.navigate(['/']);
  }
}
