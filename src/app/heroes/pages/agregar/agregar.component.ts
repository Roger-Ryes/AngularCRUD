import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      heigth : 20%;
      border-radius: 5px
    }
  `]
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


  constructor(
    private heroesService:HeroesService,
    private activatedRoute: ActivatedRoute, // Lee el url
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.router.url.includes("editar")){
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeById(id) )
      )
      .subscribe( 
        resp => {
          this.heroe = resp;
          console.log(this.heroe.id);
        }
      );
    }
  }

  save(){
    if(this.heroe.superhero.trim().length==0)
      return
    
    if(this.heroe.id!=undefined){
      //Actualizar
      this.heroesService.updateHeroe(this.heroe)
      .subscribe( heroe =>{
        console.log(heroe)
      })
    }else{
      //Crear
      this.heroesService.addHeroe(this.heroe)
      .subscribe(heroe=>{
        console.log(heroe);
        //Cambiar de ruta
        this.router.navigate(["heroes/editar/", heroe.id])
      });
    }
  }

  delete(){
    this.heroesService.deleteHeroe(this.heroe.id!)
    .subscribe( resp=> {
      this.router.navigate(['/heroes/listado/'])
    })
  }
}
