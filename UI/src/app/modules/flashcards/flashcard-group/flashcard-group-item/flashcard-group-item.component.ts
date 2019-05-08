import {Component, Input, OnInit} from '@angular/core';
import * as flashcardGroupsActions from "../store/flashcard-group.actions";
import {Store} from "@ngrx/store";
import {FlashcardGroupState} from "../store/flashcard-group.reducers";
import {Router} from "@angular/router";
import {FlashcardGroup} from "../flashcard-group.model";

@Component({
  selector: 'app-flashcard-group-item',
  templateUrl: './flashcard-group-item.component.html',
  styleUrls: ['./flashcard-group-item.component.css']
})
export class FlashcardGroupItemComponent implements OnInit {

  @Input() flashcardGroup: FlashcardGroup;

  constructor(private store: Store<FlashcardGroupState>, private router: Router) { }

  ngOnInit() {
  }

  onGroupSelected(groupName: string) {
    this.store.dispatch(new flashcardGroupsActions.LoadActiveFlashcardGroup(groupName));
    this.router.navigate(['flashcards/' + groupName]);
  }
}
