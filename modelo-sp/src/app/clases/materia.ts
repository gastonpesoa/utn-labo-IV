export class Materia {
    id:number
    nombre:string
    cuatrimestre:string
    cupos:number
    profesor:string
    constructor(nombre, cuatri, cupos, profe){
        this.nombre = nombre
        this.cuatrimestre = cuatri
        this.cupos = cupos
        this.profesor = profe
    }
}
