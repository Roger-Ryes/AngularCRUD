import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  noFound: boolean = false; 
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  search(){
    this.heroesService.getSuggestion(this.termino)
    .subscribe( heroes=>{
      this.heroes = heroes;
      this.noFound = (heroes.length == 0)?true:false; 
    });
  }

  optionSelect( event: MatAutocompleteSelectedEvent ){
    if(event.option.value!=null){
      const heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroeById(heroe.id)
      .subscribe(heroe=>this.heroeSeleccionado = heroe)
    }
  }

}
