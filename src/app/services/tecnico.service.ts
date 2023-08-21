import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';
import { Observable } from 'rxjs';

const routes = {
  centralPath: `tecnicos`,
  pathWithId: (id: number) => `tecnicos/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Tecnico>{
    return this.http.get<Tecnico>(`${API_CONFIG.baseUrl}/${routes.pathWithId(id)}`);
  }

  findAll(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/${routes.centralPath}`);
  }

  create(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>(`${API_CONFIG.baseUrl}/${routes.centralPath}`, tecnico);
  }

  update(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`${API_CONFIG.baseUrl}/${routes.pathWithId(tecnico.id)}`, tecnico);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/${routes.pathWithId(id)}`);
  }
}
