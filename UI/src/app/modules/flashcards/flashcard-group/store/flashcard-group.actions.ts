import {Action} from '@ngrx/store';
import {FlashcardGroup} from '../flashcard-group.model';

export enum FlashcardGroupActionTypes {
  LOAD_FLASHCARD_GROUP = ' [flashcardGroup] trigger load flashcard groups',
  LOAD_FLASHCARD_GROUP_SUCCESS = '[flashcardGroup] load flashcard groups SUCCESS',
  LOAD_FLASHCARD_GROUP_FAILED = '[flashcardGroup] load flashcard groups FAILED',
  DELETE_FLASHCARD_GROUP = '[flashcardGroup] delete flashcard groups',

  UPDATE_FLASHCARD_GROUP = '[flashcardGroup] update flashcard group',
  UPDATE_FLASHCARD_GROUP_SUCCESS = '[flashcardGroup] update flashcard groups succeed',

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
  DeleteFlashcardGroup
