import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FlashcardGroupState} from './store/flashcard-group.reducers';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppState} from "../../store/app.reducers";

@Component({
  selector: 'app-flashcard-group',
  templateUrl: './flashcard-group.component.html',
  styleUrls: ['./flashcard-group.component.css']
})
export class FlashcardGroupComponent implements OnInit {

  flashcardGroupsState: Observable<FlashcardGroupState>;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.flashcardGroupsState = this.store.select('flashcardGroups')

  }

  onBackClicked() {
    this.router.navigate(['/'])
  }
}
