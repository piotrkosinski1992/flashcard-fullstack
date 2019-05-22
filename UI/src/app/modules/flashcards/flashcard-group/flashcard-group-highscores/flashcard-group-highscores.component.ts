import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";
import {FlashcardGroup} from "../flashcard-group.model";

@Component({
  selector: 'app-flashcard-group-highscores',
  templateUrl: './flashcard-group-highscores.component.html',
  styleUrls: ['./flashcard-group-highscores.component.css']
})
export class FlashcardGroupHighscoresComponent implements OnInit, OnDestroy {

  flashcardGroup: FlashcardGroup;
  flashcardGroups: FlashcardGroup[];

  constructor(private activeRoute: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('flashcardGroups')
      .subscribe(groupStore => this.flashcardGroups = groupStore.flashcardGroups);

    this.flashcardGroup =  this.flashcardGroups
      .filter((group: FlashcardGroup) =>
        group.name == this.activeRoute.snapshot.paramMap.get('groupName'))[0];
  }

  ngOnDestroy(): void {
  }
}
