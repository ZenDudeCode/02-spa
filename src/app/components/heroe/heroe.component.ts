import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

 
  heroe: any = {};

  constructor(private  activatedRoute: ActivatedRoute,
              private  _heroeService: HeroesService){ 

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
    } )
  }
}
