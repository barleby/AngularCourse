import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable(
  {
    providedIn: 'root'
  })
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 5000,
      id: uuid()
    },
    {
      name: 'Goku',
      power: 15000,
      id: uuid()
    }
  ];
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid()
    }
    this.characters.push(newCharacter);

  }
  deleteCharacter(index: string) {

    this.characters = this.characters.filter((item) => item.id !== index);

  }

}
