import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-instrumentos-finalizados',
  imports: [],
  templateUrl: './instrumentos-finalizados.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentosFinalizadosComponent {
  instrumentosFinalizados = input.required<number>();
 }
