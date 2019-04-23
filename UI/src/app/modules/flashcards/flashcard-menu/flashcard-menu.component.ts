import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flashcard-menu',
  templateUrl: './flashcard-menu.component.html',
  styleUrls: ['./flashcard-menu.component.css']
})
export class FlashcardMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStartSelected() {
    console.log(1)
  }

  onCreateSelected() {
    this.router.navigate(['/flashcards/create'])
  }

  onUploadSelected() {
    this.router.navigate(['/flashcards/uploadFile'])
  }
}
