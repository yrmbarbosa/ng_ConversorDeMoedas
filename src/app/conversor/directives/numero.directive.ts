import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numero]'
})
export class NumeroDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])

  onKeyUp($event: any) {

    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor =  valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;

  }
  
}
