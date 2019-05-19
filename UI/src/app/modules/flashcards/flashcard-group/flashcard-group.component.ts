import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FlashcardGroupState} from './store/flashcard-group.reducers';
import {Observable} from "rxjs";
import {AppState} from "../../store/app.reducers";
import * as flashcardGroupsActions from "./store/flashcard-group.actions";

@Component({
  selector: 'app-flashcard-group',
  templateUrl: './flashcard-group.component.html',
  styleUrls: ['./flashcard-group.component.css']
})
export class FlashcardGroupComponent implements OnInit {

  flashcardGroupsState: Observable<FlashcardGroupState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new flashcardGroupsActions.LoadFlashcardGroups());
    this.flashcardGroupsState = this.store.select('flashcardGroups')
  }
}
