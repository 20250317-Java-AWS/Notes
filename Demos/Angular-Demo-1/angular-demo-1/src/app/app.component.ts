import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponent } from "./my-new/my-new.component";

@Component({
  selector: 'app-root',
  imports: [MyNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo-1';
}

