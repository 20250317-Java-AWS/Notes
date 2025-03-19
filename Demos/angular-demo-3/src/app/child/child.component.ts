import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name: string = "XXXXXXXXXXXXXXXX"



  submit() {
    this.nameEvent.emit("Kyle")
  }
  
  @Output() nameEvent: EventEmitter<string> = new EventEmitter<string>


}
