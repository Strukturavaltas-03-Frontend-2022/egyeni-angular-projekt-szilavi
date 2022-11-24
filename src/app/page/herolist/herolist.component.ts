import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Heroes } from 'src/app/model/heroes';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.scss'],
})
export class HerolistComponent implements OnInit {
  heroList$: BehaviorSubject<Heroes[]> = this.heroesService.heroes$;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}
}
