import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./game.component";
import {GameQuestionComponent} from "./game-question/game-question.component";
import {GameAnswerComponent} from "./game-answer/game-answer.component";
import {GameRoutingModule} from "./game-routing.module";
import {FormsModule } from "@angular/forms";

@NgModule({
  declarations: [GameComponent, GameQuestionComponent, GameAnswerComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GameModule { }
