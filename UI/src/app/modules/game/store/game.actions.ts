import {Action} from "@ngrx/store";
import {Flashcard} from "../../flashcards/flashcard.model";
import {LoadFlashcardGroups} from "../../flashcards/flashcard-group/store/flashcard-group.actions";


export enum GameActionTypes {
  LOAD_ACTIVE_FLASHCARD_GROUP = ' [flashcardGroup] trigger loading ACTIVE flashcard group',
  LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS = ' [flashcardGroup] loading  ACTIVE flashcard group SUCCESS',
  CLEAR_ACTIVE_FLASHCARD_GROUP = ' [flashcardGroup] clear  ealier ACTIVE flashcard group'
}

export class ClearActiveFlashcardGroup implements Action {
  readonly type = GameActionTypes.CLEAR_ACTIVE_FLASHCARD_GROUP
}

export class LoadActiveFlashcardGroup implements Action {
  readonly type = GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP;

  constructor(public groupName: string) {
  }
}

export class LoadActiveFlashcardGroupSuccess implements Action {
  readonly type = GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS;

  constructor(public activeFlashcardGroup: Flashcard[]) {
  }
}


export type GameActions =
  LoadFlashcardGroups |
  LoadActiveFlashcardGroup |
  LoadActiveFlashcardGroupSuccess |
  ClearActiveFlashcardGroup
