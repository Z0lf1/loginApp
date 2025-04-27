import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginApp';
}
