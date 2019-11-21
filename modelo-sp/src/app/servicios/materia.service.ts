import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(
    private data: DataService
  ) { }

  getAll() {
    return this.data.getAll('materia/');
  }

  getAllConCupo(id) {
    return this.data.get(`materia/conCupo/${id}`);
  }

  getMateriasUser(id: any) {
    return this.data.get(`materia/materiasAlumno/${id}`);
  }

  getMateriasProfe(nombre: any) {
    return this.data.get(`materia/materiasProfe/${nombre}`);
  }

  getAlumnosMateria(materiaId: any) {
    return this.data.get(`materia/alumnosMateria/${materiaId}`)
  }

  alta(materia: any) {
    return this.data.post('materia/new', materia);
  }

  update(materia: any) {
    return this.data.post('materia/update', materia)
  }

  inscribir(alumnoId, materiaId: any) {
    let data = {
      idAlumno: alumnoId,
      idMateria: materiaId
    }
    return this.data.post('materia/inscribir', data);
  }
}
