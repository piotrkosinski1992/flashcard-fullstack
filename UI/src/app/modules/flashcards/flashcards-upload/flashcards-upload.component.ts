import {Component, OnInit} from '@angular/core';
import {UploadFlashCardsService} from "../../services/upload-flash-cards.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flashcards-upload',
  templateUrl: './flashcards-upload.component.html',
  styleUrls: ['./flashcards-upload.component.css']
})
export class FlashcardsUploadComponent implements OnInit {
  selectedFile = null;

  constructor(private uploadFileService: UploadFlashCardsService, private router: Router) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.uploadFileService.uploadFile(this.selectedFile)
      .subscribe(res => {
          this.router.navigate(['flashcards/all'])
        },
        err => {
          console.log(err)
        });
  }
}

