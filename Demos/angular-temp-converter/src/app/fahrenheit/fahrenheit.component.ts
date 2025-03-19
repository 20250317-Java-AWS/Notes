import { Component, signal, WritableSignal } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fahrenheit',
  imports: [FormsModule],
  templateUrl: './fahrenheit.component.html',
  styleUrl: './fahrenheit.component.css'
})
export class FahrenheitComponent {
  converter: ConverterService
  fahrenheitValue: WritableSignal<number>

  constructor(converter: ConverterService){
    this.converter = converter
    this.fahrenheitValue = converter.fahrenheitValue
  }

}
