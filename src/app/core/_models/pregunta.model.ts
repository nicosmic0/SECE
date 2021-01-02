export interface dataSeleccion{
    opciones: Array<string>
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
    tipo_pregunta: number
    data: dataSeleccion | dataEscala | string
}

// 1: seleccion unica
// 2: seleccion multiple
// 3: escala
// 4: desarrollo