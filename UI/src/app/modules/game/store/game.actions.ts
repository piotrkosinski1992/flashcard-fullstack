import {Action} from "@ngrx/store";
import {Flashcard} from "../../flashcards/flashcard.model";
import {
  LoadFlashcardGroups
} from "../../flashcards/flashcard-group/store/flashcard-group.actions";
import {Result} from "../result.model";
import {FlashcardGroup} from "../../flashcards/flashcard-group/flashcard-group.model";


export enum GameActionTypes {
  LOAD_ACTIVE_FLASHCARD_GROUP = ' [game] trigger loading ACTIVE flashcard group',
  LOAD_ACTIVE_FLASHCARD_GROUP_SUCCESS = ' [game] loading  ACTIVE flashcard group SUCCESS',
  CLEAR_ACTIVE_FLASHCARD_GROUP = ' [game] clear  ealier ACTIVE flashcard group',

  SET_ACTIVE_FLASHCARD = '[game] set active flascard',
  DELETE_FLASHCARD = '[game] delete flashcard',

  INCREMENT_CORRECT_ANSWERS = '[game] increment CORRECT answers',
  INCREMENT_INCORRECT_ANSWERS = '[game] increment INCORRECT answers',

  SAVE_GAME_RESULT = '[game] save game result',
  SAVE_GAME_RESULT_SUCCESS = '[game] save game result SUCCESS',

  DELETE_FLASHCARD_LOCAL = '[flashcard] delete flashcard locally'
}

export class DeleteFlashcardLocal implements Action {
  readonly type = GameActionTypes.DELETE_FLASHCARD_LOCAL;

  constructor(public flashcard: Flashcard) {
  }
}

export class SaveGameResult implements Action {
  readonly type = GameActionTypes.SAVE_GAME_RESULT;

  constructor(public result: Result) {
  }
}

export class SaveGameResultSuccess implements Action {
  readonly type = GameActionTypes.SAVE_GAME_RESULT_SUCCESS;

  constructor(public finalScore: number) {
  }
}

export class IncrementCorrectAnswers implements Action {
  readonly type = GameActionTypes.INCREMENT_CORRECT_ANSWERS;
}

export class IncrementIncorrectAnswers implements Action {
  readonly type = GameActionTypes.INCREMENT_INCORRECT_ANSWERS;
}

export class DeleteFlashcard implements Action {
  readonly type = GameActionTypes.DELETE_FLASHCARD;

  constructor(public flashcard: Flashcard) {
  }
}

export class SetActiveFlashcard implements Action {
  readonly type = GameActionTypes.SET_ACTIVE_FLASHCARD;

  constructor(public flashcard: Flashcard){
  }
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

  constructor(public group: FlashcardGroup) {
  }
}


export type GameActions =
  LoadFlashcardGroups |
  LoadActiveFlashcardGroup |
  LoadActiveFlashcardGroupSuccess |
  ClearActiveFlashcardGroup |
  SetActiveFlashcard |
  DeleteFlashcard |
  IncrementCorrectAnswers |
  IncrementIncorrectAnswers |
  SaveGameResult |
  SaveGameResultSuccess |
  DeleteFlashcardLocal

