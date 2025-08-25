import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterAnio',
})
export class FilterAnioPipe implements PipeTransform {

  transform(value: any[], año: number): any[] {
    if (!año || año === 0) return value;

    return value.filter(instrumento => {
      return new Date(instrumento.fecha_creacion).getFullYear() === año;
    });
  }

}
