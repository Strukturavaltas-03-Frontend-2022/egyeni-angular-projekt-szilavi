import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Heroes } from 'src/app/model/heroes';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['./heroeditor.component.scss'],
})
export class HeroeditorComponent implements OnInit {
  heroService: HeroesService = inject(HeroesService);
  ar: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  //itt csak azért használom az injectet, mert Józsi megtanította és gondoltam legyen egy ilyen is (lássa, hogy figyelek :P)

  hero$: Observable<Heroes> = this.ar.params.pipe(
    switchMap((params) => this.heroService.get(params['id']))
  );

  statusList: any[] = [
    { key: true, title: 'YES, the hero is in my library' },
    { key: false, title: 'NO, the hero is not in my library' },
  ];

  hero: Heroes = new Heroes();

  constructor() {}

  ngOnInit(): void {
    this.hero$.subscribe((hero) => {
      this.hero = hero;
    });
  }

  onSubmit(hero: Heroes): void {
    hero.id = Number(hero.id);
    hero.level = Number(hero.level);
    hero.owned = Boolean(hero.owned);

    console.log(hero);

    if (this.hero.id) {
      this.heroService
        .update(hero)
        .subscribe((hero) => this.router.navigate(['/herolist']));
    } else if (!this.hero.id) {
      this.heroService
        .create(hero)
        .subscribe((hero) => this.router.navigate(['/herolist']));
    }
  }
}
