import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
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
  inputEstado = input.required<TipoInstrumento | null>();

  estadoArray = signal<TipoInstrumento[]>(estadoInstrumento);
  searchTipo = signal<TipoInstrumento | null>(null);

  constructor() {
    effect(() => {
      const currentInputEstado = this.inputEstado();
      this.searchTipo.set(currentInputEstado);
    });
  }

  sendTipo(event: any) {
    this.searchTipo.set(event.target.value);
    this.estado.emit(this.searchTipo());
  }
}
