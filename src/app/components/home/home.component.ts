import { Component } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getAllCharacters()
      .subscribe(d => (this.characters = d.data));
  }
}
