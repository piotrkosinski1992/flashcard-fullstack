import {Action} from '@ngrx/store';
import {FlashcardGroup} from '../flashcard-group.model';
import {Flashcard} from "../../flashcard.model";

export enum FlashcardGroupActionTypes {
  LOAD_FLASHCARD_GROUP = ' [flashcardGroup] trigger load flashcard groups',
  LOAD_FLASHCARD_GROUP_SUCCESS = '[flashcardGroup] load flashcard groups SUCCESS',
  LOAD_FLASHCARD_GROUP_FAILED = '[flashcardGroup] load flashcard groups FAILED',
  DELETE_FLASHCARD_GROUP = '[flashcardGroup] delete flashcard groups',
  //TODO
  UPDATE_FLASHCARD_GROUPS = '[flashcardGroup] update flashcard groups',

  LOAD_ACTIVE_FLASHCARD_GROUP = ' [flashcardGroup] trigger loading flashcard group',
  LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS = ' [flashcardGroup] loading  ACTIVE flashcard group SUCCESS',
  CLEAR_ACTIVE_FLASHCARD_GROUP = ' [flashcardGroup] clear  ealier ACTIVE flashcard group'
}

export class ClearActiveFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.CLEAR_ACTIVE_FLASHCARD_GROUP
}

export class LoadActiveFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP;

  constructor(public groupName: string) {
  }
}

export class LoadActiveFlashcardGroupSuccess implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS;

  constructor(public activeFlashcardGroup: Flashcard[]) {
  }
}



export class LoadFlashcardGroups implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP;
}

export class LoadFlashcardGroupsSuccess implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP_SUCCESS;

  constructor(public flashcardGroups: FlashcardGroup[]) {
  }
}

export class LoadFlashcardGroupsFailed implements Action {
  readonly type = FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP_FAILED;

  constructor(public errorMessage: string) {
  }
}

export class DeleteFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.DELETE_FLASHCARD_GROUP;

  constructor(public groupName: string) {
  }
}

export type FlashcardGroupActions = LoadFlashcardGroups |
  LoadFlashcardGroupsSuccess |
  LoadFlashcardGroupsFailed |
  LoadActiveFlashcardGroup |
  LoadActiveFlashcardGroupSuccess |
  ClearActiveFlashcardGroup |
  DeleteFlashcardGroup
