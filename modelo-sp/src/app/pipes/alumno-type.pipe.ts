import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumnoType'
})
export class AlumnoTypePipe implements PipeTransform {

  transform(usuarios: any): any {
    return usuarios.filter(user => user.tipo === "alumno");
  }

}
