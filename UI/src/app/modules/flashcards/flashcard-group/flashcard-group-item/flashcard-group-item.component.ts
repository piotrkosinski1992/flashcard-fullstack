import {Component, Input, OnInit} from '@angular/core';
import * as gameActions from "../../../game/store/game.actions"
import * as flashcardGroupActions from "../store/flashcard-group.actions"
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {FlashcardGroupActions} from "../store/flashcard-group.actions";
import {GameActions} from "../../../game/store/game.actions";

@Component({
  selector: 'app-flashcard-group-item',
  templateUrl: './flashcard-group-item.component.html',
  styleUrls: ['./flashcard-group-item.component.css']
})
export class FlashcardGroupItemComponent implements OnInit {

  @Input() flashcardGroup;

  constructor(private gameStore: Store<GameActions>, private flashcardGroupStore: Store<FlashcardGroupActions>, private router: Router) { }

  ngOnInit() {
  }

  onGroupSelected(groupName: string) {
    this.gameStore.dispatch(new gameActions.LoadActiveFlashcardGroup(groupName));
    this.router.navigate(['flashcards/' + groupName]);
  }

  onDeleteFlashcardGroup(groupName: string) {
      if(confirm("Are you sure to delete " + name)) {
        this.flashcardGroupStore.dispatch(new flashcardGroupActions.DeleteFlashcardGroup(groupName));
      }
  }
}
