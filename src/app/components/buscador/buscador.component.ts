import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {


  heroesClasificados:any[] = [];
  constructor(private activatedRoute:ActivatedRoute,
    private heroesService: HeroesService ) {

      this.activatedRoute.params.subscribe(params=>{
        this.heroesClasificados = this.heroesService.buscarHeroe(params['termino']);
        console.log(this.heroesClasificados);
        
      });
     }



}
