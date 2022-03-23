import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if(!heroe.id && !heroe.alt_img){
      const urlImage: string = "./assets/no-image.png"
      return urlImage;
    }else if(heroe.alt_img){
      console.log(heroe.alt_img);
      return heroe.alt_img
    }
    else{
      const urlImage: string = `./assets/heroes/${ heroe.id }.jpg`;
      return urlImage;
    }
  }

}
