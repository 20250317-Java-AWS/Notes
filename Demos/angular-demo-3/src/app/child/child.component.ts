import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name: string = "XXXXXXXXXXXXXXXX"
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>()

  // update() {
  //   let textBox = document.getElementById("input")
  //   this.nameChange.emit((textBox as HTMLInputElement).value)
  // }
  



}
