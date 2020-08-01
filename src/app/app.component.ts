import { Component } from '@angular/core';
import { MyBio} from './MyBio'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'James Burrows';

  Bio: MyBio = {name:"James Burrows", snum:991541595, ImageLocation: "./assets/images",status:"Sophomore"};
}
