import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-total-entregas',
  imports: [],
  templateUrl: './total-entregas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalEntregasComponent {
  totalEntregas = input.required<number>();
}
