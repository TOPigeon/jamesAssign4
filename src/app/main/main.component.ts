import { Component, OnInit, Input } from '@angular/core';
import {COURSES} from '../../assets/data/myCourses'; 
import { MyBio } from '../MyBio';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
i: number;
  constructor() { }
  @Input() BioInfo: MyBio
  myclasses = COURSES;
    
  ngOnInit(): void {
  }

    onClickMe(i){
      this.i =i;

    }

    showHideText(index){
      if(index == this.i){
        return "block"
      }else{
        return "none"
      }
    }
}
