import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Officedetails } from './officedetails';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http:HttpClient) { }

  baseurl:string="http://localhost:8080/office";
  getAll():Observable<Officedetails[]>{
    return this.http.get<Officedetails[]>(`${this.baseurl}/get`)
  }
  
  getById(officeId: number): Observable<Officedetails> {
    return this.http.get<Officedetails>(`${this.baseurl}/get/${officeId}`);
  }
  
  post(office: Officedetails): Observable<Officedetails> {
    return this.http.post<Officedetails>(`${this.baseurl}/add`, office);
  }
  
  update(officeId: number, updatedOffice: Officedetails): Observable<Officedetails> {
    return this.http.put<Officedetails>(`${this.baseurl}/update/${officeId}`, updatedOffice);
  }
  
  delete(officeId: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/delete/${officeId}`);
  }
}
