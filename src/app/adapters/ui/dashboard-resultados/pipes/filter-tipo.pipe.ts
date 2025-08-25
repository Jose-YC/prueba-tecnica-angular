import { Pipe, type PipeTransform } from '@angular/core';
import { TipoInstrumento } from '../../interface/dashboard.interface';

@Pipe({
  name: 'FilterTipo',
})
export class FilterTipoPipe implements PipeTransform {

  transform(value: any[], tipo: TipoInstrumento | null): any[] {
    if (!tipo) return value;
    return value.filter(instrumento => instrumento.tipo === tipo);
  }

}
