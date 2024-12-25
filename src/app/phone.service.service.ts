import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhoneServiceService {
  private apiUrl = 'https://run.mocky.io/v3/87cb6f22-4fae-4742-8928-ec50ceb7d199';

  constructor(private http: HttpClient) {}

  getPhones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
