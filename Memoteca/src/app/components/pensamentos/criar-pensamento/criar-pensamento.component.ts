import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento : Pensamento ={
    conteudo:'',
    autoria:'',
    modelo:''
  }

  constructor(private service:PensamentoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento():void{
    this.service.criar(this.pensamento).subscribe();
    this.router.navigate(['/listarPensamento']);
    // alert('Novo pensamento criado');
  }
  cancelar():void{
    alert('Cadastro de pensamento cancelado');
    this.router.navigate(['/listarPensamento']);
  }
}
