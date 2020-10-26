import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable()
export class MoedaService {

  private moedas: Moeda[];

  constructor() {}

  private moedasObj = [    
    {"sigla": "USD", "descricao": "Dólar"},    
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "BRL", "descricao": "Real"}
  ];

  listarTodas(): Moeda[]{

    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();      
      Object.assign(moeda, moedaObj);      
      this.moedas.push(moeda);
    }

    return this.moedas;        

  }   

}
