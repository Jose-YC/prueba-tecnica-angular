import { Pipe, type PipeTransform } from '@angular/core';
import { ResumenInstrumento } from '../../interface/dashboard.interface';

@Pipe({
  name: 'FilterAnio',
})
export class FilterAnioPipe implements PipeTransform {

  transform(value: ResumenInstrumento[], año: number): ResumenInstrumento[] {
    if (!año || año === 0) return value;

    return value.filter(instrumento => {
      return new Date(instrumento.fecha_creacion).getFullYear() === año;
    });
  }

}
