import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { 
    console.log("This is the service constructor!")
  }

  name_1: string = "JIMOTHY"
  verb_1: string = "SKI"
  pronoun_1: string = "IT"
  verb_2: string = "JUGGLE"
  species: string = "GREAT WHITE SHARK"
  adjective_1: string = "BORING"

  users: User[] = [
    {firstName: "Kyle", lastName: "Plummer", age: 39},
    {firstName: "Danielle", lastName: "Plummer", age: 39},
    {firstName: "Stacy", lastName: "Plummer", age: 35},
  ]



}

class User {
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  firstName: string
  lastName: string
  age: number

}
