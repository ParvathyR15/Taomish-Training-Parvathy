

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class FormService {
  private baseUrl = 'http://localhost:8080/api/forms'; 
  constructor(private http: HttpClient) {}

  
  getFormData(formType: string): Observable<any> {                                   //getdata from jsonfile
    return this.http.get(`/${formType}.json`); // No need to specify "public"
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, formData);
  }

  get(url:any) :Observable<any>{
    return this.http.get("url");
  }
  
}

