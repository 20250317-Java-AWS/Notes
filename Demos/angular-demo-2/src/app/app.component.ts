import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from './two/two.component';
import { DataStoreService } from './data-store.service';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { BackwardsPipe } from './backwards.pipe';

@Component({
  selector: 'app-root',
  imports: [/*OneComponent, TwoComponent*/ LowerCasePipe, BackwardsPipe, OneComponent, TwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  dataStore: DataStoreService;  

  constructor(dataStore: DataStoreService) {
    console.log("App Component Constructor.")
    this.dataStore = dataStore;
  }

  ngOnInit() {
    console.log("ngOnInit." + " <-- that's from ngOnInit!")     
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }


}
