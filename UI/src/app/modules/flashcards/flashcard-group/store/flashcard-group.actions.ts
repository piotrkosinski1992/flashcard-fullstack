import { Action } from '@ngrx/store';
import { FlashcardGroup } from '../flashcard-group.model';

export enum FlashcardGroupActionTypes {
  LOAD_FLASHCARD_GROUPS = ' [flashcardGroup] trigger load flashcard groups',
  LOAD_FLASHCARD_GROUPS_SUCCESS = '[flashcardGroup] load flashcard groups SUCCESS',
  LOAD_FLASHCARD_GROUPS_FAILED = '[flashcardGroup] load flashcard groups FAILED',
  //TODO
  UPDATE_FLASHCARD_GROUPS = '[flashcardGroup] update flashcard groups',
  DELETE_FLASHCARD_GROUPS = '[flashcardGroup] delete flashcard groups'
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
}

export class DeleteFlashcardGroup implements Action {
  readonly type = FlashcardGroupActionTypes.DELETE_FLASHCARD_GROUPS;

  constructor(public groupName: string) {
  }
}

export type FlashcardGroupActions = LoadFlashcardGroups |
                                    LoadFlashcardGroupsSuccess |
                                    LoadFlashcardGroupsFailed |
                                    DeleteFlashcardGroup
