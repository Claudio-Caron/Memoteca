import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pensamento } from './pensamento/pensamento';
import { Observable } from 'rxjs/internal/Observable';
import ApiMultas from 'api-multas';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http:HttpClient){}
  public listar (): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API);
  }
  public criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }
  public Editar(pensamento :Pensamento):Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);

  }
  public excluir (id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }
  buscarPorId(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
