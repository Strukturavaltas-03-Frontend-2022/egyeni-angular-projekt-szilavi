import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from 'src/app/model/heroes';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.scss'],
})
export class HerocardComponent implements OnInit {
  @Input() hero: Heroes = new Heroes();

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {}

  removeHero(hero: Heroes): void {
    if (confirm('Are you sure?')) {
      this.heroService
        .remove(hero)
        .subscribe(() =>
          this.heroService.getAll().subscribe(() => location.reload())
        );
    }
  }
}
