import {Action} from '@ngrx/store';
import {FlashcardGroup} from '../flashcard-group.model';
import {Flashcard} from "../../flashcard.model";

export enum FlashcardGroupActionTypes {
  LOAD_FLASHCARD_GROUPS = ' [flashcardGroup] trigger load flashcard groups',
  LOAD_FLASHCARD_GROUPS_SUCCESS = '[flashcardGroup] load flashcard groups SUCCESS',
   LOAD_FLASHCARD_GROUPS_FAILED = '[flashcardGroup] load flashcard groups FAILED',
   //TODO
   UPDATE_FLASHCARD_GROUPS = '[flashcardGroup] update flashcard groups',
   DELETE_FLASHCARD_GROUPS = '[flashcardGroup] delete flashcard groups',

  LOAD_ACTIVE_FLASHCARD_GROUP = ' [flashcardGroup] trigger loading flashcard group',
  LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS = ' [flashcardGroup] loading  ACTIVE flashcard group SUCCESS'
}

export class LoadActiveFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP;
  constructor(public groupName: string){
  }
}

export class LoadActiveFlashcardGroupSuccess implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS;

  constructor(public activeFlashcardGroup: Flashcard[]) {
  }
}

export class LoadFlashcardGroups implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUPS;
}

export class LoadFlashcardGroupsSuccess implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUPS_SUCCESS;

  constructor(public flashcardGroups: FlashcardGroup[]) {
  }
}

export class LoadFlashcardGroupsFailed implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUPS_FAILED;

  constructor(public errorMessage: string) {
  }
}
/*
export class DeleteFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.DELETE_FLASHCARD_GROUPS;

  constructor(public groupName: string) {
  }
}*/

export type FlashcardGroupActions = LoadFlashcardGroups  |
                                    LoadFlashcardGroupsSuccess |
                                    LoadFlashcardGroupsFailed |
                                    LoadActiveFlashcardGroup |
                                    LoadActiveFlashcardGroupSuccess
