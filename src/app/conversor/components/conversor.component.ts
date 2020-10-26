import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  moedasLiberadasParaConsulta: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
    
    this.moedas = this.moedaService.listarTodas();
    this.moedasLiberadasParaConsulta = this.moedaService.listarMoedasLiberadasParaConsulta();        
    this.iniciar();

  }

  iniciar(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {



    if (this.conversaoForm.valid) {
      //alert("Convertendo: " + JSON.stringify(this.conversao));

      this.conversorService
      .converter(this.conversao)
      .subscribe(
        (response) => {
          this.conversaoResponse = response;
          this.possuiErro = response.error;
        },         
        error => this.possuiErro = true
      );

      console.log(this.possuiErro);
      console.log(this.conversaoResponse);

    }
  }

}
