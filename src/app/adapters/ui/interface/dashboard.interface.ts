export interface FiltrosResultados {
  anio: number;
  oferta_formativa_id: string | null;
  tipo: TipoInstrumento | null;
}
export enum TipoInstrumento {
  EVALUACION = "evaluación",
  ENCUESTA = "encuesta",
}
export interface ResumenInstrumento {
  instrumento_id: string;
  nombre: string;
  tipo: TipoInstrumento;
  entregas: number;
  promedio_calificacion: number | null;
  fecha_creacion: Date;
  estado: EstadoInstrumento;
  oferta: { id: string; nombre: string; };
  total_participantes: number;
  porcentaje_completitud: number;
}

export enum EstadoInstrumento {
  ACTIVO = "activo",
  INACTIVO = "inactivo",
  FINALIZADO = "finalizado",
}
export interface OfertaFormativa {
  id: string;
  nombre: string;
  codigo: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  estado: string;
  participantes_inscritos: number;
}
export interface EstadisticasGenerales {
  total_instrumentos: number;
  total_entregas: number;
  promedio_general: number | null;
  instrumentos_activos: number;
  instrumentos_finalizados: number;
}
