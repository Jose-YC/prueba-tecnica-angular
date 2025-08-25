import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InstrumentosActivosComponent } from "./components/instrumentos-activos/instrumentos-activos.component";
import { EstadisticasGenerales } from '../../../interface/dashboard.interface';
import { InstrumentosFinalizadosComponent } from "./components/instrumentos-finalizados/instrumentos-finalizados.component";
import { PromedioGeneralComponent } from "./components/promedio-general/promedio-general.component";
import { TotalEntregasComponent } from "./components/total-entregas/total-entregas.component";
import { TotalInstrumentosComponent } from "./components/total-instrumentos/total-instrumentos.component";

@Component({
  selector: 'app-statistics-instruments',
  imports: [InstrumentosActivosComponent, InstrumentosFinalizadosComponent, PromedioGeneralComponent, TotalEntregasComponent, TotalInstrumentosComponent],
  templateUrl: './statistics-instruments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsInstrumentsComponent {
  estadisticas = input.required<EstadisticasGenerales>();
}
