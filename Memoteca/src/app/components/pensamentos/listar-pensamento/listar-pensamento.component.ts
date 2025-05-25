import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento [] = [];
  constructor(private clientPensamento:PensamentoService) { }

  ngOnInit(): void {
    this.clientPensamento.listar().subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    });
  }
  // public listarComponentes(){
  //   return this.clientPensamento.listar()
  // }
}
