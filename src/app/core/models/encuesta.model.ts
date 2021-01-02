export interface Encuesta{
    id: number
    nombre: string
    descripcion: string
    usuarioCreador: number
    carrera: number
    anonima: boolean
    habilitada: boolean
    fechaInicio: Date
    fechaTermino: Date
    activa: boolean
}