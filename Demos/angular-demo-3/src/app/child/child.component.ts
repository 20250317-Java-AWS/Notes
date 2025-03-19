import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  name: string = "Kyle"

  emit(): EventEmitter<string> {


    return ""
  }
}
