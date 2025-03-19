import { Component, WritableSignal } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-celsius',
  imports: [FormsModule],
  templateUrl: './celsius.component.html',
  styleUrl: './celsius.component.css'
})
export class CelsiusComponent {
  converter: ConverterService
  celsiusValue: WritableSignal<number>
  constructor(converter: ConverterService){
    this.converter = converter
    this.celsiusValue = converter.celsiusValue
  }

}
