import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';

import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img{
      width: 80%;
      border-radius: 5px
    }
  `]
})
export class HeroComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activateRouter: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params
    .pipe(
      switchMap( ({id})=> this.heroesService.getHeroeById(id)),
      tap(console.log)
     )
    .subscribe( resp =>{
      // console.log(resp)
      this.heroe = resp;
    })
  }

  returnToPage(){
    this.router.navigate(['heroes/listado']);
  }

}
