import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards.component';
import { FlashcardsUploadComponent } from './flashcards-upload/flashcards-upload.component';
import { FlashcardGroupCreateComponent } from './flashcard-group/flashcard-group-create/flashcard-group-create.component';
import { FlashcardGroupComponent } from './flashcard-group/flashcard-group.component';
import {FlashcardsListComponent} from "./flashcards-list/flashcards-list.component";

const flashCardRoutes: Routes = [
  {
    path: '', component: FlashcardsComponent, children: [
      {path: 'uploadFile', component: FlashcardsUploadComponent},
      {path: 'create', component: FlashcardGroupCreateComponent},
      {path: 'all', component: FlashcardGroupComponent},
      {path: ':groupName', component: FlashcardsListComponent},

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
