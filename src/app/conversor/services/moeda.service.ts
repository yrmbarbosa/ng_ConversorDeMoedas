import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable()
export class MoedaService {

  private moedasLiberadasParaConsulta : Moeda[];
  private moedas: Moeda[];

  constructor() {}

  private moedasObj = [    
    {"sigla": "USD", "descricao": "Dólar"},    
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "BRL", "descricao": "Real"}
  ];

  listarMoedasLiberadasParaConsulta(): Moeda[] {

    if (this.moedasLiberadasParaConsulta) {
      return this.moedasLiberadasParaConsulta;
    }

    this.moedasLiberadasParaConsulta = [];

    for (let moedaObj of this.moedasObj){
      if (moedaObj.sigla == "EUR") {
        let moeda: Moeda = new Moeda();      
        Object.assign(moeda, moedaObj);      
        this.moedasLiberadasParaConsulta.push(moeda);        
      }            
    }

    return this.moedasLiberadasParaConsulta;        

  }

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
