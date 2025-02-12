import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private apiUrl = 'https://localhost:7030/api/Employees'; // Correct API URL

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEmployee(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  // updateBook(id: number, book: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, book);
  // }
  updateEmployee(id: number, book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { ...book, id });
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
