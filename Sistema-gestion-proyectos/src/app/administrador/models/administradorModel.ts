export class Administrador{
    id: Number
    nombre: string
    cedula: string
    rol: string
    disponibilidad: string
    contraseña:string

    constructor(id:Number, nombre:string, cedula:string, rol:string, disponibilidad:string, contraseña:string){
        this.id = id
        this.nombre = nombre
        this.cedula = cedula
        this.rol = rol
        this.disponibilidad = disponibilidad
        this.contraseña = contraseña
    }
}