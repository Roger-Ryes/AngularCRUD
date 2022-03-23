import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publisher=[
    {
      id: "DC Comics",
      desc : "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc : "Marvel - Comics"
    }
  ]

  heroe: Heroe = {
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher:Publisher.DCComics,
    alt_img:"",
  }
  heroeReturn!: Heroe;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    // this.publisher.forEach(i=>{
    //   console.log(i.id)
    // })
  }

  save(){
    if(this.heroe.superhero.trim().length==0)
      return
    
      this.heroesService.addHeroe(this.heroe)
      .subscribe(resp=>{
        this.heroeReturn =  resp;
        console.log(this.heroeReturn);
      });
  }
}
