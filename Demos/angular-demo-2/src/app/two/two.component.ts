import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BackwardsPipe } from '../backwards.pipe';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-two',
  imports: [LowerCasePipe, BackwardsPipe],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  dataStore: DataStoreService

  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }
}
