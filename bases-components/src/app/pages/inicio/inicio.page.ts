import { Componente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Observable<Componente[]>;
  constructor(
    private menuctrl:MenuController,
    private ds:DataService) {
      
    }

  ngOnInit() {
    this.componentes = this.ds.getMenuOpts();
  }

  toggleMenu(){
    this.menuctrl.toggle();
  }

}



