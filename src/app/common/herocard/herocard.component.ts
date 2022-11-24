import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from 'src/app/model/heroes';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.scss'],
})
export class HerocardComponent implements OnInit {
  @Input() hero: Heroes = new Heroes();

  constructor() {}

  ngOnInit(): void {}
}
