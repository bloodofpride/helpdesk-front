import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

const routes = {
  centralPath: `clientes`,
  pathWithId: (id: number) => `clientes/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/${routes.pathWithId(id)}`);
  }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/${routes.centralPath}`);
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/${routes.centralPath}`, cliente);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/${routes.pathWithId(cliente.id)}`, cliente);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/${routes.pathWithId(id)}`);
  }
}
