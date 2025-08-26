import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { EstadisticasGenerales, EstadoInstrumento, FiltrosResultados, ResumenInstrumento } from '../interface/dashboard.interface';
import { FilterInstrumentsComponent } from "./components/filter-instruments/filter-instruments.component";
import { ListInstrumentsComponent } from "./components/list-instruments/list-instruments.component";
import { instrumentos } from '../data/data';
import { StatisticsInstrumentsComponent } from "./components/statistics-instruments/statistics-instruments.component";
@Component({
  selector: 'app-dashboard-resultados',
  imports: [FilterInstrumentsComponent, ListInstrumentsComponent, StatisticsInstrumentsComponent],
  templateUrl: './dashboard-resultados.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardResultadosComponent {

  filter = signal<FiltrosResultados | null>(null);

  estadisticas = computed<EstadisticasGenerales>(() => {
    return {
      total_instrumentos: this.getTotalInstruments(),
      total_entregas: this.getTotalEntregas(),
      promedio_general: this.getPromedioGeneral(),
      instrumentos_activos: this.getInstrumentosActivos(),
      instrumentos_finalizados: this.getInstrumentosFinalizados(),
    };
  });

  instruments = signal<ResumenInstrumento[]>(instrumentos);

  applyFilters(filters: FiltrosResultados) {
    this.filter.set(filters);
  }

  getTotalInstruments() {
    return this.instruments().length;
  }

  getTotalEntregas() {
    return this.instruments().reduce((sum, inst) => sum + inst.entregas, 0);
  }

  getPromedioGeneral(){
    const promedio = this.instruments()
    .reduce(
      (sum, inst) => {
        if(inst.porcentaje_completitud) return sum + inst.porcentaje_completitud;
        return sum
      }, 0
    ) / this.instruments().length;

    return Math.round(promedio * 100) / 100;

    // si quieres excluir a los que tengan null del promedio general
    // const instrumentosFiltrados = this.instruments().filter(inst => inst.promedio_calificacion !== null);
    // return instrumentosFiltrados.reduce((sum, inst) => sum + inst.promedio_calificacion!, 0) / this.getTotalInstruments() - instrumentosFiltrados.length;
  }

  getInstrumentosActivos(){
    return this.instruments().filter(inst => inst.estado === EstadoInstrumento.ACTIVO).length;
  }

  getInstrumentosFinalizados(){
    return this.instruments().filter(inst => inst.estado === EstadoInstrumento.FINALIZADO).length;
  }
}
