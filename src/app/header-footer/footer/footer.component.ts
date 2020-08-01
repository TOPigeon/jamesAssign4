import { Component, OnInit, Input } from '@angular/core';
import { MyBio } from '../../MyBio';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() BioInfo: MyBio

  ngOnInit(): void {
  }
  date : Date = new Date();

}
