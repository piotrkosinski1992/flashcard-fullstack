import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {ActivatedRoute, Router} from "@angular/router";
import * as flashcardGroupActions from "../flashcard-group/store/flashcard-group.actions"
import {Observable} from "rxjs";
import {FlashcardGroupState} from "../flashcard-group/store/flashcard-group.reducers";

@Component({
  selector: 'app-flashcards-list',
  templateUrl: './flashcards-list.component.html',
  styleUrls: ['./flashcards-list.component.css']
})
export class FlashcardsListComponent implements OnInit {

  //flashcards: Flashcard[];
  flashcardGroupsState: Observable<FlashcardGroupState>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.flashcardGroupsState = this.store.select('flashcardGroups')
    //this.store.select('flashcardGroups').subscribe(result => this.flashcards = result.activeFlashcardGroup)
  }

  onBackClicked() {
    this.store.dispatch(new flashcardGroupActions.ClearActiveFlashcardGroup());
    this.router.navigate(['../all'], {relativeTo: this.route})
  }
}
