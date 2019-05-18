import {Component, OnDestroy, OnInit} from '@angular/core';
import {UploadFlashCardsService} from "../../services/upload-flash-cards.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert/alert.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-flashcards-upload',
  templateUrl: './flashcards-upload.component.html',
  styleUrls: ['./flashcards-upload.component.css']
})
export class FlashcardsUploadComponent implements OnInit, OnDestroy {
  selectedFile = null;

  constructor(private uploadFileService: UploadFlashCardsService,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.alertService.clearAlerts();
    this.uploadFileService.uploadFile(this.selectedFile)
      .subscribe(() => {
          this.alertService.successAlert("Upload Succeed!");
          setTimeout(() => {
            this.router.navigate(['flashcards/all'])
          }, 1000);
        },
        (err: HttpErrorResponse) => {
          this.alertService.errorAlert("Upload Failed, call Kosinski!! " + err.error.message);
        });
  }

  ngOnDestroy(): void {
    this.alertService.clearAlerts();
  }
}

