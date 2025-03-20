import { computed, Injectable, Signal, signal, WritableSignal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  celsiusValue: WritableSignal<number> = signal(0)
  fahrenheitValue: WritableSignal<number> = signal(32)

  constructor() { 

  }

  FtoC = effect(()=>{
    console.log("This is the FtoC conversion")
    this.celsiusValue.set((this.fahrenheitValue()-32)*(5/9))
  })

  CtoF = effect(() => {
    console.log("This is the CtoF conversion")
    this.fahrenheitValue.set((this.celsiusValue()*(9/5))+32)
  })

}
