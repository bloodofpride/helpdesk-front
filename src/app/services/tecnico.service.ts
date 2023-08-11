import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';
import { Observable } from 'rxjs';

const routes = {
  centralPath: `tecnicos`
}

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/${routes.centralPath}`);
  }

  create(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>(`${API_CONFIG.baseUrl}/${routes.centralPath}`, tecnico);
  }
}
