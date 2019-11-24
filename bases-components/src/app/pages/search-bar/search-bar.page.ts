import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albums:any[] = [];
  text:string = '';
  constructor(private ds:DataService) { }

  ngOnInit() {
      this.ds.getAlbums().subscribe( albumes => {
        this.albums = albumes;
      })
  }

  buscar(e:any){
    this.text = e.detail.value;
  }

}
