import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {FlashcardsComponent} from "./flashcards.component";
import {FlashcardsUploadComponent} from "./flashcards-upload/flashcards-upload.component";
import {FlashcardMenuComponent} from "./flashcard-menu/flashcard-menu.component";

const flashCardRoutes: Routes = [
  {
    path: '', component: FlashcardsComponent, children: [
      {path: 'upload', component: FlashcardsUploadComponent},
           {path: 'menu', component: FlashcardMenuComponent},
      /*       {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent},*/
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
