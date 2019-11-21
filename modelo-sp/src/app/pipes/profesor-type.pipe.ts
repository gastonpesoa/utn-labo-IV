import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profesorType'
})
export class ProfesorTypePipe implements PipeTransform {

  transform(usuarios: any): any {
    return usuarios.filter(user => user.tipo === "profesor");
  }

}
