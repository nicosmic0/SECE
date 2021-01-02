import { Encuesta } from '../_models/encuesta.model';

// carreras: (14),(15),16,22,(23),(32),33
// carrera: secretario
// 14: 20 = 3 encuestas
// 23: 21 = 2 encuestas
// 15: 22 = 1 encuestas

export const ENCUESTAS: Encuesta[] = [
    {
        id: 1,
        nombre: 'Propuestas para presupuesto de carrera 2020',
        descripcion: 'Encuesta de prueba número 1 wena los cabros',
        usuarioCreador: 20,
        carrera: 14,
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
        usuarioCreador: 20,
        carrera: 14,
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
        usuarioCreador: 20,
        carrera: 14,
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
        usuarioCreador: 21,
        carrera: 23,
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
        usuarioCreador: 21,
        carrera: 23,
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
        usuarioCreador: 22,
        carrera: 15,
        anonima: true,
        habilitada: true,
        fechaInicio: new Date(2021,1,7),
        fechaTermino: new Date(2021,1,12),
        activa: true
    },
]