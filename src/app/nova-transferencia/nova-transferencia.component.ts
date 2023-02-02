import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(
    private service: TransferenciaService,
    private router: Router

    ) { }

  @Output()
  aoTransferir = new EventEmitter();

  valor!: number;
  destino!: number;


  transferir() {
    console.log("Solicitada nova transferência");


    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado)
        this.limparCampos();

        this.router.navigateByUrl('extrato');

      },
      (error) => console.error(error)
    )
  }

  limparCampos() {

    this.valor = 0;
    this.destino = 0;


  }


  ngOnInit(): void {



  }



}
