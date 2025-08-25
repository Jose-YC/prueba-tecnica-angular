import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-total-instrumentos',
  imports: [],
  templateUrl: './total-instrumentos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalInstrumentosComponent {
  totalInstrumentos = input.required<number>();
}
