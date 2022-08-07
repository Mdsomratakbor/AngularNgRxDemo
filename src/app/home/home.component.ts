import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isStatus:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isStatus = this.isStatus==false?true:false;
  }

}
