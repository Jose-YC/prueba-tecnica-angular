import { Pipe, type PipeTransform } from '@angular/core';
import { ResumenInstrumento, TipoInstrumento } from '../../interface/dashboard.interface';

@Pipe({
  name: 'FilterTipo',
})
export class FilterTipoPipe implements PipeTransform {

  transform(value: ResumenInstrumento[], tipo: TipoInstrumento | null): ResumenInstrumento[] {
    if (!tipo || !Object.values(TipoInstrumento).includes(tipo)) return value;
    return value.filter(instrumento => instrumento.tipo === tipo);
  }

}
