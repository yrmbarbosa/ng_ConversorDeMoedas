import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEntrada: string): string {

    if (!dataEntrada) {
      return '';
    }

    const dataArr = dataEntrada.split('-');

    if (dataArr.length !== 3) {
      return dataEntrada;
    }

    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];

  }

}
