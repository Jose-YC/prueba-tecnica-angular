import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { ofertasFormativas } from '../../../../../data/data';
import { OfertaFormativa } from '../../../../../interface/dashboard.interface';

@Component({
  selector: 'app-filter-oferta',
  imports: [],
  templateUrl: './filter-oferta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterOfertaComponent {
  oferta = output<string | null>();
  inputOferta = input.required<string | null>();

  ofertaArray = signal<OfertaFormativa[]>(ofertasFormativas);
  searchOferta = signal<string | null>(null);

  constructor() {
    effect(() => {
      const currentInputOferta = this.inputOferta();
      this.searchOferta.set(currentInputOferta);
    });
  }

  sendOferta(event: any) {
    this.searchOferta.set(event.target.value);
    this.oferta.emit(this.searchOferta());
  }
}
