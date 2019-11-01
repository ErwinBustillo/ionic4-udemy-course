import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(10);
  constructor(private pctrl:PopoverController) { }

  ngOnInit() {}

  onClick(i:number){
      this.pctrl.dismiss({
        item: i
      });
  }

}
