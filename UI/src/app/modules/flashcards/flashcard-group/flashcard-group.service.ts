import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashcardGroup } from './flashcard-group.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardGroupService {

  constructor(private http: HttpClient) { }

  getFlashCardGroups(): Observable<FlashcardGroup[]> {
    return this.http.get<FlashcardGroup[]>('/api/flashcards/group/all')
  }
}
