import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credencias';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

const routes = {
  logar: `/login`
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    console.log(`${API_CONFIG.baseUrl}+${routes.logar}`);
    return this.http.post(`${API_CONFIG.baseUrl}${routes.logar}`, creds, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout(): void {
    localStorage.clear();
  }
}
