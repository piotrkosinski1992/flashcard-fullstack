import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FlashcardGroupState} from './store/flashcard-group.reducers';
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
    this.store.dispatch(new flashcardGroupsActions.LoadFlashcardGroups());
    this.store.select('flashcardGroups').subscribe(groups => {
      this.flashcardGroups = groups['flashcardGroups']
    })
  }
}
