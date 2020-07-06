import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-heroe-texto',
  templateUrl: './heroe-texto.component.html',
  styleUrls: ['./heroe-texto.component.css']
})
export class HeroeTextoComponent  implements OnInit{

  heroe: any = {} ;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { }

ngOnInit(){
  this.activatedRoute.params.subscribe(params => {
    //console.log(params['termino']);
    this.termino = (params['termino']);
    this.heroe = this._heroesService.buscarHeroe(params['termino']);
    console.log(this.heroe);
  })  
}


}
