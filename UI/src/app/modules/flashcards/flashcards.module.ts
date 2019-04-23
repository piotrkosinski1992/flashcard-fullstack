import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlashcardsRoutingModule} from "./flashcards-routing.module";
import {FlashcardsComponent} from './flashcards.component';
import {FlashcardsListComponent} from './flashcards-list/flashcards-list.component';
import {FlashcardItemComponent} from './flashcard-item/flashcard-item.component';
import {FlashcardEditComponent} from './flashcard-edit/flashcard-edit.component';
import {FlashcardsUploadComponent} from './flashcards-upload/flashcards-upload.component';
import {FlashcardsCreateComponent} from './flashcards-create/flashcards-create.component';
import {FlashcardMenuComponent} from './flashcard-menu/flashcard-menu.component';
import {FlashcardGroupComponent} from './flashcard-group/flashcard-group.component';
import {FlashcardGroupItemComponent} from './flashcard-group/flashcard-group-item/flashcard-group-item.component';
import {FlashcardGroupCreateComponent} from './flashcard-group/flashcard-group-create/flashcard-group-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [FlashcardsComponent, FlashcardsListComponent, FlashcardItemComponent, FlashcardEditComponent, FlashcardsUploadComponent, FlashcardsCreateComponent, FlashcardMenuComponent, FlashcardGroupComponent, FlashcardGroupItemComponent, FlashcardGroupCreateComponent],
  imports: [
    CommonModule,
    FlashcardsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FlashcardsModule {
}
