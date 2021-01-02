import { Pregunta } from '../_models/pregunta.model';

export const PREGUNTAS: Pregunta[] = [
    {
        id: 1,
        encuesta: 1,
        titulo: '¿Pregunta de prueba desarrollo?',
        tipo_pregunta: 4,
        data: ''
    },
    {
        id: 2,
        encuesta: 1,
        titulo: '¿Pregunta de prueba escala?',
        tipo_pregunta: 3,
        data: {
            escalaInferior: 1,
            escalaSuperiror: 5
        }
    },
    {
        id: 3,
        encuesta: 1,
        titulo: '¿Pregunta de prueba selección única?',
        tipo_pregunta: 2,
        data: {
            opciones: ['Apruebo', 'Desapruebo'],
            seleccion: 1
        }
    },
    {
        id: 4,
        encuesta: 1,
        titulo: '¿Pregunta de prueba selección multiple?',
        tipo_pregunta: 1,
        data: {
            opciones: ['Cantar', 'Estudiar', 'Jugar a la pelota'],
            seleccion: 2
        }
    },

    {
        id: 5,
        encuesta: 2,
        titulo: '¿Pregunta de prueba selección única?',
        tipo_pregunta: 2,
        data: {
            opciones: ['Apruebo', 'Desapruebo'],
            seleccion: 1
        }
    },

    {
        id: 6,
        encuesta: 3,
        titulo: '¿Pregunta de prueba selección única?',
        tipo_pregunta: 2,
        data: {
            opciones: ['Si', 'No'],
            seleccion: 1
        }
    },



    {
        id: 7,
        encuesta: 4,
        titulo: '¿Pregunta de prueba selección única?',
        tipo_pregunta: 2,
        data: {
            opciones: ['Si', 'No'],
            seleccion: 1
        }
    },
    {
        id: 8,
        encuesta: 5,
        titulo: '¿Pregunta de prueba selección escala?',
        tipo_pregunta: 3,
        data: {
            escalaInferior: 1,
            escalaSuperiror: 10
        }
    },

    {
        id: 9,
        encuesta: 6,
        titulo: '¿Pregunta de prueba desarrollo?',
        tipo_pregunta: 4,
        data: ''
    },
]