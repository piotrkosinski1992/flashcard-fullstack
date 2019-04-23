import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FlashcardsComponent} from "./flashcards.component";
import {FlashcardsUploadComponent} from "./flashcards-upload/flashcards-upload.component";
import {FlashcardMenuComponent} from "./flashcard-menu/flashcard-menu.component";
import {FlashcardGroupCreateComponent} from "./flashcard-group/flashcard-group-create/flashcard-group-create.component";
import {FlashcardGroupComponent} from "./flashcard-group/flashcard-group.component";

const flashCardRoutes: Routes = [
  {
    path: '', component: FlashcardsComponent, children: [
      {path: 'uploadFile', component: FlashcardsUploadComponent},
      {path: 'menu', component: FlashcardMenuComponent},
      {path: 'create', component: FlashcardGroupCreateComponent},
      {path: 'all', component: FlashcardGroupComponent},
      /*       {path: ':id/edit', component: RecipeEditComponent},*/
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(flashCardRoutes),
  ],
  exports: [RouterModule]
})
export class FlashcardsRoutingModule {

}
