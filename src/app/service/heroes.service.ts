import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../model/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  entityName: string = 'heroes';

  heroes$: BehaviorSubject<Heroes[]> = new BehaviorSubject<Heroes[]>([]);

  constructor() {
    this.getAll();
  }

  getAll(): void {
    this.http
      .get<Heroes[]>(`${this.apiUrl}${this.entityName}`)
      .subscribe((heroList) => this.heroes$.next(heroList));
  }
}
