import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje:number = 0.05;
  constructor() { }

  ngOnInit() {
  }

  rangeChange(e:any){
    this.porcentaje = e.detail.value /100;
  }

}
