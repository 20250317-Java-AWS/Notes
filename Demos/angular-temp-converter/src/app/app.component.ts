import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CelsiusComponent } from "./celsius/celsius.component";
import { FahrenheitComponent } from "./fahrenheit/fahrenheit.component";

@Component({
  selector: 'app-root',
  imports: [CelsiusComponent, FahrenheitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-temp-converter';
}
