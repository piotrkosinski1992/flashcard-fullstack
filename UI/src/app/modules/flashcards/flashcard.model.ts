export class Flashcard {
  public heads: string;
  public tails: string;
  public groupName: string;

  constructor(heads: string, tails: string, groupName: string) {
    this.heads = heads;
    this.tails = tails;
    this.groupName = groupName;
  }
}
