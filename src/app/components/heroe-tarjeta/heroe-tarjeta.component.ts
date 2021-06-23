import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  @Output() heroeSeleccionado = new EventEmitter<number>();
  @Input() heroe:any ={};
  @Input() index: number;
  constructor(private router: Router) { 

    this.heroeSeleccionado = new EventEmitter(); 

  }

  ngOnInit(): void {
  }
  verHeroe(){
      //console.log(this.index);
      this.router.navigate(['/heroe', this.index]);
      //this.heroeSeleccionado.emit(this.index);

  }


}
