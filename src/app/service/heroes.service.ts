import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../model/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  entityName: string = 'heroes';

  // heroes$: BehaviorSubject<Heroes[]> = new BehaviorSubject<Heroes[]>([]);

  // selectedHero$: BehaviorSubject<Heroes | null> =
  //   new BehaviorSubject<Heroes | null>(null);

  constructor() {}

  getAll(page: string = ''): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.apiUrl}${this.entityName}${page}`);
  }

  get(id: number): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(hero: Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.apiUrl}${this.entityName}`, hero);
  }

  update(hero: Heroes): Observable<Heroes> {
    return this.http.patch<Heroes>(
      `${this.apiUrl}${this.entityName}/${hero.id}`,
      hero
    );
  }

  remove(hero: Heroes): Observable<Heroes> {
    return this.http.delete<Heroes>(
      `${this.apiUrl}${this.entityName}/${hero.id}`
    );
  }

  //ez itt egy behaviorSubjectes megoldás

  // getCachedHeroIndexById(id: number): number {
  //   id = Number(id);
  //   const currentHeroList = this.heroes$.getValue();
  //   return currentHeroList.findIndex((hero) => hero['id'] === id);
  // }

  // getAll(): void {
  //   this.http
  //     .get<Heroes[]>(`${this.apiUrl}${this.entityName}`)
  //     .subscribe((heroList) => this.heroes$.next(heroList));
  // }

  // get(id: number): void {
  //   const heroIndex = this.getCachedHeroIndexById(id);

  //   if (heroIndex > -1) {
  //     this.selectedHero$.next(this.heroes$.getValue()[heroIndex]);
  //   } else {
  //     this.http
  //       .get<Heroes>(`${this.apiUrl}${this.entityName}/${id}`)
  //       .subscribe((data) => this.selectedHero$.next(data));
  //   }
  // }

  // remove(id: number): void {
  //   this.http
  //     .delete<Heroes>(`${this.apiUrl}${this.entityName}/${id}`)
  //     .subscribe(() => {
  //       const heroIndex = this.getCachedHeroIndexById(id);
  //       if (heroIndex > -1) {
  //         const currentHeroList = this.heroes$.getValue();
  //         currentHeroList.splice(heroIndex, 1);
  //         this.heroes$.next(currentHeroList);
  //       }
  //     });
  // }

  // create(hero: Heroes): void {
  //   this.http
  //     .post<Heroes>(`${this.apiUrl}${this.entityName}`, hero)
  //     .subscribe((hero) => {
  //       this.heroes$.next(this.heroes$.getValue().concat(hero));
  //     });
  // }

  // update(hero: Heroes): void {
  //   this.http
  //     .patch<Heroes>(`${this.apiUrl}${this.entityName}`, hero)
  //     .subscribe((hero) => {
  //       const currentHeroList = this.heroes$.getValue();
  //       let heroUpdate = currentHeroList.find(
  //         (oldHero) => oldHero.id === hero.id
  //       );
  //       heroUpdate = hero;
  //     });
  // }
}
