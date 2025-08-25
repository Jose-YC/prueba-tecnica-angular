import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterOferta',
})
export class FilterOfertaPipe implements PipeTransform {

  transform(value: any[], ofertaId: string | null): any {
    if (!ofertaId) return value;
    return value.filter(instrumento => instrumento.oferta.id === ofertaId);
  }

}
