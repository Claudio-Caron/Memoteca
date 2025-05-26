import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento={
    id:'',
    conteudo:'',
    autoria:'',
    modelo:''
  };

  constructor(
    private service :PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento)=>{
      this.pensamento = pensamento
    });
  }

  public editarPensamento(): void{
    this.service.Editar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento']);
    });
  }
  public cancelar():void{
    alert('Edição de artista cancelada!');
    this.router.navigate(['/listarPensamento']);
  }
}
