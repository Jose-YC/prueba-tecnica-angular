import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { anios } from '../../../../../data/data';

@Component({
  selector: 'app-filter-anio',
  imports: [],
  templateUrl: './filter-anio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterAnioComponent {
  anio = output<number>();
  inputAnio = input.required<number>();

  anioArray = signal<number[]>(anios);
  searchAnio = signal<number>(0);

  constructor() {
    effect(() => {
      const currentInputAnio = this.inputAnio();
      this.searchAnio.set(currentInputAnio);
    });
  }

  sendAnio(event: any) {
    this.searchAnio.set(parseInt(event.target.value));
    this.anio.emit(this.searchAnio());
  }
}
