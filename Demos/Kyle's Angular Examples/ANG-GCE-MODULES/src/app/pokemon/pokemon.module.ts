import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharizardComponent } from './charizard/charizard.component';
import { MewtwoComponent } from './mewtwo/mewtwo.component';
import { PikachuComponent } from './pikachu/pikachu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PikachuComponent,
    CharizardComponent,
    MewtwoComponent
  ],
  exports: [
    PikachuComponent,
    CharizardComponent,
    MewtwoComponent
  ]
})
export class PokemonModule { }
