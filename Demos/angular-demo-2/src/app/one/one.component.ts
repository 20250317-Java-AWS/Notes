import { Component } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one',
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  dataStore: DataStoreService
  
  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }


}
