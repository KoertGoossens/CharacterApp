import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from '../models/ServiceResponse';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  private apiUrl = `${environment.apiUrl}`;
  
  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/character/getall`;
    return this.http.get<ServiceResponse>(url);
  }
}
