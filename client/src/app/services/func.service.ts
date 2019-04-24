import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Funcionario } from '../models/func';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  private readonly API_URI = 'http://localhost:3000/func';
  
  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get<Funcionario[]>(this.API_URI).pipe(tap(console.log));        
  }

  getFuncionario(id: string){
    return this.http.get<any>(this.API_URI + {id}); 
  }

  saveFuncionario(func: Funcionario){    
    return this.http.post<any>(this.API_URI, func).pipe(take(1));    
  }

  deleteFuncionario(id: String){
    return this.http.delete<any>(this.API_URI + {id});    
  }

  updateFuncionario(id: String, updateFuncionario: Funcionario): Observable<Funcionario>{
   return this.http.put<any>(this.API_URI + {id}, updateFuncionario); 
  }
 
}
