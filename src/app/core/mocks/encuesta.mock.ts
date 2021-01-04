import { Encuesta } from '../models/encuesta.model';

// carreras: (14),(15),16,22,(23),(32),33
// carrera
// 14: 3 encuestas
// 23: 2 encuestas
// 15: 1 encuestas

const { usuario1, carrera1 } = { usuario1:20, carrera1:14 };  // Ingeniería Comercial
const { usuario2, carrera2 } = { usuario2:21, carrera2:23 };  // Pedagogía en Educación Física
const { usuario3, carrera3 } = { usuario3:22, carrera3:15 };  // Ingeniería Civil Industrial

export const ENCUESTAS: Encuesta[] = [
    {
        id: 1,
        nombre: 'Propuestas para presupuesto de carrera 2020',
        descripcion: 'Encuesta de prueba número 1 wena los cabros',
        usuarioCreador: usuario1,
        carrera: carrera1,
        anonima: false,
        habilitada: false,
        fechaInicio: new Date(2020,12,1),
        fechaTermino: new Date(2020,12,5),
        activa: true
    },
    {
        id: 2,
        nombre: 'Votación de propuestas para presupuesto de carrera 2020',
        descripcion: 'Encuesta de prueba número 2 wena los cabros',
        usuarioCreador: usuario1,
        carrera: carrera1,
        anonima: true,
        habilitada: false,
        fechaInicio: new Date(2020,12,1),
        fechaTermino: new Date(2020,12,5),
        activa: true
    },
    {
        id: 3,
        nombre: 'Votación de representantes 2021',
        descripcion: 'Encuesta de prueba número 3 wena los cabros',
        usuarioCreador: usuario1,
        carrera: carrera1,
        anonima: true,
        habilitada: true,
        fechaInicio: new Date(2021,1,7),
        fechaTermino: new Date(2021,1,12),
        activa: true
    },
    
    {
        id: 4,
        nombre: 'Propuestas para presupuesto de carrera 2020',
        descripcion: 'Encuesta de prueba número 1 wena los cabros',
        usuarioCreador: usuario2,
        carrera: carrera2,
        anonima: false,
        habilitada: false,
        fechaInicio: new Date(2020,12,1),
        fechaTermino: new Date(2020,12,5),
        activa: true
    },
    {
        id: 5,
        nombre: 'Votación de propuestas para presupuesto de carrera 2020',
        descripcion: 'Encuesta de prueba número 2 wena los cabros',
        usuarioCreador: usuario2,
        carrera: carrera2,
        anonima: true,
        habilitada: false,
        fechaInicio: new Date(2020,12,1),
        fechaTermino: new Date(2020,12,5),
        activa: true
    },

    {
        id: 6,
        nombre: 'Votación de representantes 2021',
        descripcion: 'Encuesta de prueba número 3 wena los cabros',
        usuarioCreador: usuario3,
        carrera: carrera3,
        anonima: true,
        habilitada: true,
        fechaInicio: new Date(2021,1,7),
        fechaTermino: new Date(2021,1,12),
        activa: true
    },
]