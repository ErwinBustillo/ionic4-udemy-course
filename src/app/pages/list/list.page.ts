import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista',{static: false}) lista:IonList;
  usuarios:Observable<any>;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.usuarios = this.data.getUsers();
  }

  favorite(user){
    console.log('favorite',user);
    this.lista.closeSlidingItems();
  }
  share(user){
    console.log('share',user);
    this.lista.closeSlidingItems();
  }
  unread(user){
    console.log('unread',user);
    this.lista.closeSlidingItems();
  }

}
