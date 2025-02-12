import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:7030/api/books'; // Correct API URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book);
  }

  // updateBook(id: number, book: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, book);
  // }
  updateBook(id: number, book: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { ...book, id });
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
