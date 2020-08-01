import { Component, OnInit, Input } from '@angular/core';
import {COURSES} from '../../assets/data/myCourses'; 
import { MyBio } from '../MyBio';
import {carsInterface} from '../carsInterface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
i: number;
  constructor() { }
  @Input() BioInfo: MyBio
  @Input() newCars: carsInterface[];
  @Input() usedCars: carsInterface[]; 
  myclasses = COURSES;
  background= "green"; 
  ngOnInit(): void {
  }

    onClickMe(i){
      this.i =i;

    }
    public show:boolean = false; 
    public showNew:boolean=false; 
    onClickNewCar(){
      this.showNew = !this.showNew;
    }
    onClickUsedCar(){
      this.show = !this.show;
    }

    showHideText(index){
      if(index == this.i){
        return "block"
      }else{
        return "none"
      }
    }
}
