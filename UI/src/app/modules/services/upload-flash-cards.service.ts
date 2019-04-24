import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlashcardGroup} from "../flashcards/flashcard-group/flashcard-group.model";

@Injectable({
  providedIn: 'root'
})
export class UploadFlashCardsService {

  constructor(private http: HttpClient) { }

  uploadFile(selectedFile: File) {
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name);
    return this.http.post('/api/upload/file', fd)
  }

  uploadFlashcardGroup(flashcardGroup: FlashcardGroup) {
    return this.http.post('/api/upload/array/'
      + flashcardGroup.flashcardGroupName, flashcardGroup.flashcards)
  }
}
