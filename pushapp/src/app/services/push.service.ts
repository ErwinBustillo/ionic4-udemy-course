import {
  Injectable, EventEmitter
} from '@angular/core';
import {
  OneSignal, OSNotification, OSNotificationPayload
} from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  public messages:OSNotificationPayload[] = [
    // {
    //   title:'Titulo de la push',
    //   body:'Este es el body de la push',
    //   date:new Date()
    // }
  ];

  userId:string;

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal) {
    this.loadMessages();
  }


  setup() {

    this.oneSignal.startInit('38e0e09b-e114-4ffb-83fc-5b0511c97708', '747093664159');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('notificacion recibida', noti);
      this.pushReceived(noti);

    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('notificacion abierta', noti);
      this.pushReceived(noti.notification);
    });

    //get ID subscriptor
    this.oneSignal.getIds().then( info=>{
      this.userId = info.userId;
      console.log(this.userId);
    });

    this.oneSignal.endInit();

  }

  pushReceived(notification:OSNotification){
    
    const payload = notification.payload;

    const pushExits = this.messages.find (msg => msg.notificationID === payload.notificationID);

    if (pushExits) {
      return;
    }

    this.messages.unshift(payload);
    this.pushListener.emit(payload);
    this.saveMessages();

  }

  saveMessages(){
    localStorage.setItem('messages',JSON.stringify(this.messages));
  }

  loadMessages(){
    this.messages = JSON.parse(localStorage.getItem('messages')) || [];
    return this.messages;
  }

  getMessages(){
    this.loadMessages();
    return [...this.messages];
  }

  deleteMessages(){
    localStorage.clear();
    this.messages = [];
    this.saveMessages();
  }

}