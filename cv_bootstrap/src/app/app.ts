import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from "./entete/entete";
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
