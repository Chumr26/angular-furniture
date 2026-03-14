import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetcherService {
    // TODO: Replace this with your actual Firebase Realtime Database URL
    private apiUrl = 'https://furniture-9e350-default-rtdb.asia-southeast1.firebasedatabase.app/';
    constructor(private http: HttpClient) { }

    // Generic GET request
    get<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(this.apiUrl + endpoint + '.json');
    }

    // Generic POST request
    post<T>(endpoint: string, body: T): Observable<T> {
        return this.http.post<T>(this.apiUrl + endpoint + '.json', body);
    }

    // Generic PUT request
    put<T>(endpoint: string, body: T): Observable<T> {
        return this.http.put<T>(this.apiUrl + endpoint + '.json', body);
    }

    // Generic PATCH request
    patch<T>(endpoint: string, body: Partial<T>): Observable<T> {
        return this.http.patch<T>(this.apiUrl + endpoint + '.json', body);
    }

    // Generic DELETE request
    delete<T>(endpoint: string): Observable<T> {
        return this.http.delete<T>(this.apiUrl + endpoint + '.json');
    }
}
