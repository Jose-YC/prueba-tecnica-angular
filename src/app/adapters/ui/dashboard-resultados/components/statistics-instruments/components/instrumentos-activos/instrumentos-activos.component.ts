import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-instrumentos-activos',
  imports: [],
  templateUrl: './instrumentos-activos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentosActivosComponent {
  instrumentosActivos = input.required<number>();
}
