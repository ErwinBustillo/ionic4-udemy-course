import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit,AfterViewInit {


  @ViewChild(IonSegment,{static:false}) segment:IonSegment;
  heroes:Observable<any>;
  publisher:string = '';
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.heroes = this.ds.getHeroes();
    
  }

  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.segment.value = 'todos';
  }

  segmentChanged(e:any){
    const valor = e.target.value;
    if (valor === 'todos') {
      this.publisher = '';
    }else{
      this.publisher = valor;
    }
  }

}