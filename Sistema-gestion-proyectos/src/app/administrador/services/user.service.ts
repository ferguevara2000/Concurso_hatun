import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administradorModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = '/Usuarios/';
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  obtenerUserPorId(idBus: string): Observable<any> {
    return this.http.get(this.baseUrl+this.url+idBus);
  }
  listaUsers(): Observable<any> {
    return this.http.get(this.baseUrl+this.url);
  }
  guardarUser(Bus: Administrador): Observable<any> {
    return this.http.post(this.baseUrl+this.url,Bus);
  }
  eliminarUser(idBus: Number): Observable<any> {
    return this.http.delete(this.baseUrl+this.url+idBus);
  }
}
