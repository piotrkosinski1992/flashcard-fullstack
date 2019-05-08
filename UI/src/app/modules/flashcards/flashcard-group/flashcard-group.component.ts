import {Component, OnInit} from '@angular/core';
import {FlashcardGroupService} from "./flashcard-group.service";
import {FlashcardGroup} from "./flashcard-group.model";

@Component({
  selector: 'app-flashcard-group',
  templateUrl: './flashcard-group.component.html',
  styleUrls: ['./flashcard-group.component.css']
})
export class FlashcardGroupComponent implements OnInit {

  flashcardGroups = [];

  constructor(private flashcardGroupService: FlashcardGroupService) {
  }

  ngOnInit() {
    this.flashcardGroupService.getFlashCardGroups().subscribe(
      (response: FlashcardGroup[]) => this.flashcardGroups = response
    )
  }

}
