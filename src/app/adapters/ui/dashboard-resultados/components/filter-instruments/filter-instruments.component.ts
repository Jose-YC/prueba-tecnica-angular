import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

import { FilterAnioComponent } from "./components/filter-anio/filter-anio.component";
import { FilterTipoComponent } from "./components/filter-tipo/filter-tipo.component";
import { FilterOfertaComponent } from "./components/filter-oferta/filter-oferta.component";
import { FiltrosResultados, TipoInstrumento } from '../../../interface/dashboard.interface';

@Component({
  selector: 'app-filter-instruments',
  imports: [FilterAnioComponent, FilterTipoComponent, FilterOfertaComponent],
  templateUrl: './filter-instruments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterInstrumentsComponent {

  outputFilters = output<FiltrosResultados>();

  filters = signal<FiltrosResultados>({
    anio: 0,
    tipo: null,
    oferta_formativa_id: null,
  })

  applyAnio(anio:number) {
    this.filters.set({
      ...this.filters(),
      anio,
    });
    this.sendFilters();
  }

  applyTipo(tipo: TipoInstrumento | null) {
    this.filters.set({
      ...this.filters(),
      tipo,
    });
    this.sendFilters();
  }

  applyOfertaFormativaId(oferta_formativa_id: string | null) {
    this.filters.set({
      ...this.filters(),
      oferta_formativa_id,
    });
    this.sendFilters();
  }

  resetFilters() {
    this.filters.set({
      anio: 0,
      oferta_formativa_id: null,
      tipo: null
    });
    this.sendFilters();
  }

  sendFilters() {
    this.outputFilters.emit({ ...this.filters() });
  }
}
