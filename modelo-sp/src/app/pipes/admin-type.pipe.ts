import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminType'
})
export class AdminTypePipe implements PipeTransform {

  transform(usuarios: any): any {
    return usuarios.filter(user => user.tipo === "administrador");
  }

}
