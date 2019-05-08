import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FlashcardGroupState } from './store/flashcard-group.reducers';
import * as flashcardGroupsActions from '../flashcard-group/store/flashcard-group.actions'

@Component({
  selector: 'app-flashcard-group',
  templateUrl: './flashcard-group.component.html',
  styleUrls: ['./flashcard-group.component.css']
})
export class FlashcardGroupComponent implements OnInit {

  flashcardGroups = [];

  constructor(private store: Store<FlashcardGroupState>) {
  }

  ngOnInit() {
/*    this.flashcardGroupService.getFlashCardGroups().subscribe(
      (response: FlashcardGroup[]) => this.flashcardGroups = response
    )*/
    this.store.dispatch(new flashcardGroupsActions.LoadFlashcardGroups())

  }

}
