import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FiltrosResultados, ResumenInstrumento } from '../../../interface/dashboard.interface';
import { FilterAnioPipe, FilterOfertaPipe, FilterTipoPipe } from '../../pipes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-instruments',
  imports: [
    DatePipe,
    FilterAnioPipe,
    FilterOfertaPipe,
    FilterTipoPipe,
],
  templateUrl: './list-instruments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInstrumentsComponent {
  filters = input.required<FiltrosResultados | null>();
  instruments = input.required<ResumenInstrumento[]>();
}
