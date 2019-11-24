import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from '../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  messages:OSNotificationPayload[] =[];


  constructor(public ps:PushService, private appRef:ApplicationRef) {}

  ngOnInit(){
    this.ps.pushListener.subscribe(noti =>{
      this.messages.unshift(noti);
      this.appRef.tick();
    });
  }

  ionViewWillEnter(){
    console.log('will enter - cargar mensajes');
    this.messages = this.ps.getMessages();
  }

  deleteMessages(){
     this.ps.deleteMessages();
     this.messages = [];
  }

}
