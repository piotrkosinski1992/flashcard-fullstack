import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashcardGroup } from './flashcard-group.model';
import {Flashcard} from "../flashcard.model";

@Injectable({
  providedIn: 'root'
})
export class FlashcardGroupService {

  constructor(private http: HttpClient) { }

  getFlashCardGroups(): Observable<FlashcardGroup[]> {
    return this.http.get<FlashcardGroup[]>('/api/flashcards/group/all')
  }

  getActiveFlashcardGroup(groupName: string): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>('/api/flashcards/group/' + groupName);
  }
}
