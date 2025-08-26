import { Pipe, type PipeTransform } from '@angular/core';
import { ResumenInstrumento } from '../../interface/dashboard.interface';

@Pipe({
  name: 'FilterOferta',
})
export class FilterOfertaPipe implements PipeTransform {

  transform(value: ResumenInstrumento[], ofertaId: string | null): ResumenInstrumento[] {
    if (!ofertaId) return value;
    return value.filter(instrumento => instrumento.oferta.id === ofertaId);
  }

}
