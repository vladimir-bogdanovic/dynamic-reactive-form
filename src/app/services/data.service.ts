import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleMealDetailsInterface, mealsDetailsInterface } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  loadUser(): Observable<mealsDetailsInterface> {
    return this.http.get<mealsDetailsInterface>(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878'
    );
  }
}
