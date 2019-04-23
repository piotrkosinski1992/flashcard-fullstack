import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadFlashCardsService} from "../../../services/upload-flash-cards.service";
import {FlashcardGroup} from "../flashcard-group.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flashcard-group-create',
  templateUrl: './flashcard-group-create.component.html',
  styleUrls: ['./flashcard-group-create.component.css']
})
export class FlashcardGroupCreateComponent implements OnInit {

  flashCardsForm: FormGroup;
  flashCards: FormArray;

  constructor(private uploadFlashCardsService: UploadFlashCardsService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.flashCards = new FormArray([])
    this.flashCards.push(new FormGroup({heads: new FormControl('heads!'), tails: new FormControl('tails!')}))
    this.flashCards.push(new FormGroup({heads: new FormControl('heads2!'), tails: new FormControl('tails2!')}))

    this.flashCardsForm = new FormGroup({
      'groupName': new FormControl(),
      'flashcards': this.flashCards
    });
  }

  onSave() {
    this.uploadFlashCardsService.uploadFlashcardGroup(new FlashcardGroup(this.flashCardsForm.value['groupName'], this.flashCardsForm.value['flashcards']))
      .subscribe();
      this.router.navigate(['flashcards/all'])
  }

  getControls() {
    return (<FormArray>this.flashCardsForm.get('flashcards')).controls;
  }

  onAddFlashcard() {
    (<FormArray>this.flashCardsForm.get('flashcards')).push(new FormGroup({
      'heads': new FormControl(null, Validators.required),
      'tails': new FormControl(null, Validators.required)
    }));
  }

  onDeleteFlashcard(i: number) {
    (<FormArray>this.flashCardsForm.get('flashcards')).removeAt(i)
  }
}
