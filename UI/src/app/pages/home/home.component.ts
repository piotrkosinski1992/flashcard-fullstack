import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../modules/services/upload-file.service';
import { updateBinding } from '@angular/core/src/render3/bindings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFile = null;

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.uploadFileService.upload(this.selectedFile)
      .subscribe(res => {console.log('sukces')},
                      err => {console.log('error')});
  }
}
