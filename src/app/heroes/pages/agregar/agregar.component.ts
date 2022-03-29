import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

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
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
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
        this.showSnackBar("Registro actualizado");
      })
    }else{
      //Crear
      this.heroesService.addHeroe(this.heroe)
      .subscribe(heroe=>{
        console.log(heroe);
        //Cambiar de ruta
        this.router.navigate(["heroes/editar/", heroe.id])
      });
      this.showSnackBar("Registro creado");
    }
  }

  delete(){
    this.openDialog();
  }

  showSnackBar(message: string){
    // this.snackBar.open("Actualizado", );
    this.snackBar.open( message, "Ok!", { duration: 3000} );
  }

  openDialog() {
    // console.log("h:"+heroe);
    const dialogRef = this.dialog.open(ConfirmComponent, { 
      width: "250px",
      data: this.heroe
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        // Elimina desde la bd.json
        this.heroesService.deleteHeroe(this.heroe.id!)
        .subscribe( resp=> {
          this.showSnackBar("Registro eliminado");
          this.router.navigate(['/heroes/listado/'])
        })
      }
    });
  }
}