// support.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Problem } from '../models/Problem';
import { Solution } from '../models/Solution';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = 'http://localhost:8080/api/v1/findProblem';  // URL corrigida para o endpoint correto

  constructor(private http: HttpClient) {}

  fetchSolution(problem: Problem): Observable<any> {
    return this.http.post<any>(this.apiUrl, problem); // A resposta é um objeto com uma chave 'problema'
  }
  
}
