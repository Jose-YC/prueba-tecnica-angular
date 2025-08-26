import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { TipoInstrumento } from '../../../../../interface/dashboard.interface';
import { estadoInstrumento } from '../../../../../data/data';

@Component({
  selector: 'app-filter-tipo',
  imports: [],
  templateUrl: './filter-tipo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTipoComponent {
  estado = output<TipoInstrumento | null>();
  estadoArray = signal<TipoInstrumento[]>(estadoInstrumento);

  searchTipo = signal<TipoInstrumento | null>(null);

  sendTipo(event: any) {
    this.searchTipo.set(event.target.value);
    this.estado.emit(this.searchTipo());
  }

  limpiar() {
    this.searchTipo.set(null);
  }
}
