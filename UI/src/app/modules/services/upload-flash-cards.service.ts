import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFlashCardsService {

  BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  uploadFile(selectedFile: File) {
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name)
    return this.http.post(this.BASE_URL + '/api/upload/file', fd)
  }

  uploadArray(flashCards: []) {
    return this.http.post(this.BASE_URL + '/api/upload/array', flashCards)
  }


}
