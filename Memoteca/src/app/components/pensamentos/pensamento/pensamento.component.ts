import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {


  @Input() pensamento : Pensamento={
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Cláudio',
    modelo : 'modelo3'
  }
  larguraPensamento(): String{
    if (this.pensamento.conteudo.length>=256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
