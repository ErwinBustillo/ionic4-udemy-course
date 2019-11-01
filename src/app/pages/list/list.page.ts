import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista',{static: false}) lista:IonList;
  usuarios:Observable<any>;
  constructor(
    private data:DataService,
    private tctrl:ToastController) { }

  ngOnInit() {
    this.usuarios = this.data.getUsers();
  }

  favorite(user){
    this.presentToast('Guardó en favoritos');
    this.lista.closeSlidingItems();
  }
  share(user){
    this.presentToast('compartió en favoritos');
    this.lista.closeSlidingItems();
  }
  unread(user){
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

  async presentToast(message:string) {
    const toast = await this.tctrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
