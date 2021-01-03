export interface dataSeleccion{
    opciones: Array<string> // ej: ['verde','azul','amarillo']
    seleccion: number // 1:unica, 2:multiple
}

export interface dataEscala{
    escalaInferior: number
    escalaSuperiror: number
}

export interface Pregunta{
    id: number
    encuesta: number
    titulo: string
    tipo_pregunta: number  // Abajo la descripción
    data: dataSeleccion | dataEscala | string
}

// 1: seleccion unica
// 2: seleccion multiple
// 3: escala
// 4: desarrollo