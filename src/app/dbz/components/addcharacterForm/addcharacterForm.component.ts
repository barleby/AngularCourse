
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-addcharacter-form',
  templateUrl: './addcharacterForm.component.html',
  styleUrl: './addcharacterForm.component.css',
})
export class AddCharacterFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public MyCharacter: Character = { name: '', power: 0 };

  emitCharacter(): void {

    if (!this.MyCharacter.name) return;

    this.onNewCharacter.emit({ ...this.MyCharacter });
    this.MyCharacter = { name: '', power: 0 };
  }

}
