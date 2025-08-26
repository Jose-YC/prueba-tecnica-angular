import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { anios } from '../../../../../data/data';

@Component({
  selector: 'app-filter-anio',
  imports: [],
  templateUrl: './filter-anio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterAnioComponent {
  anio = output<number>();
  anioArray = signal<number[]>(anios);
  searchAnio = signal<number>(0);

  ejemplo = input<string>('');

  sendAnio(event: any) {
    this.searchAnio.set(parseInt(event.target.value));
    this.anio.emit(this.searchAnio());
  }

  limpiar() {
    this.searchAnio.set(0);
  }
}
