import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacterIdEvent: EventEmitter<string> = new EventEmitter();
  //Also correct:
  //public onDeleteCharacterEvent: EventEmitter = new EventEmitter<Character>();

  onDeleteCharacter(id: string = ''): void {

    this.onDeleteCharacterIdEvent.emit(id)

  }
}
