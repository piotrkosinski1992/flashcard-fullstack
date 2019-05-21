import {Flashcard} from "../flashcard.model";
import {Result} from "../../game/result.model";

export class FlashcardGroup {

  public size: number;
  public name: string;
  public flashcards: Flashcard[];
  public results: Result[];

  constructor(flashcardGroupName: string, flashcards: Flashcard[]) {
    this.name = flashcardGroupName;
    this.flashcards = flashcards;
  }
}
