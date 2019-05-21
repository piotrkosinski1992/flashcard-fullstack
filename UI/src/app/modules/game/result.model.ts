export class Result {

  public finalScore: string;
  public timestamp: Date;

  constructor(public correctAnswers: number,
              public incorrectAnswers: number,
              public groupName: string,
              public nickname: string){
  }

}
