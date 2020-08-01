import { Component } from '@angular/core';
import { MyBio} from './MyBio'; 
import {carsInterface} from './carsInterface';
import cars from '../assets/data/cars.json'; 


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'James Burrows';
  NewCars: carsInterface[] = cars.cars.New; 
  UsedCars: carsInterface[] = cars.cars.Used; 
  Bio: MyBio = {name:"James Burrows", snum:991541595, ImageLocation: "./assets/images/myPet.jpg",status:"Sophomore"};
}
