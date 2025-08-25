import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-promedio-general',
  imports: [],
  templateUrl: './promedio-general.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromedioGeneralComponent {
  promedioGeneral = input.required<number>();
}
