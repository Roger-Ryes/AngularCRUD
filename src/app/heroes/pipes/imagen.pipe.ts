import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    const picture = (heroe.id!=null)?heroe.id:"dc-batman";
    const urlImage: string = `./assets/heroes/${ picture }.jpg`;
    return urlImage;
  }

}
