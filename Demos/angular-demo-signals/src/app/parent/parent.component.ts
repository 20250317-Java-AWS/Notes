import { Component, signal, WritableSignal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name: WritableSignal<string> = signal("")

  changeName(name: string) {
    this.name.set(name);
  }
}
