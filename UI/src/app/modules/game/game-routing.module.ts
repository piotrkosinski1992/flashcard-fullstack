import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameQuestionComponent} from "./game-question/game-question.component";
import {GameAnswerComponent} from "./game-answer/game-answer.component";
import {GameComponent} from "./game.component";


const gameRoutes: Routes = [
  {
  path: '', component: GameComponent, children : [
  {path: 'question', component: GameQuestionComponent},
  {path: 'answer/:answer', component: GameAnswerComponent}
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes),
  ],
  exports: [RouterModule]
})
export class GameRoutingModule {

}
