import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:any;
  constructor(private lc:LoadingController) {

  }

  ngOnInit() {
    this.presentLoading('Judas es malo');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading(msj:string){
    this.loading = await  this.lc.create({
        message: msj
        // duration: 2000
    });
    return await this.loading.present();
  }

}
