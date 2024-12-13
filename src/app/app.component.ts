import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeminiComponent } from "./gemini/gemini.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GeminiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gemini-standalone';
}
