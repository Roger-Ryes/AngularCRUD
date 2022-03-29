import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false //Se invoca al metodo transfor(), cuando la entrada cambia
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    // console.log("Llamo a pipe")
    if(!heroe.id && !heroe.alt_img){
      const urlImage: string = "./assets/no-image.png"
      return urlImage;
    }else if(heroe.alt_img){
      // console.log(heroe.alt_img);
      return heroe.alt_img
    }
    else{
      const urlImage: string = `./assets/heroes/${ heroe.id }.jpg`;
      return urlImage;
    }
  }

}
