import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupHighscoresComponent } from './flashcard-group-highscores.component';

describe('FlashcardGroupHighscoresComponent', () => {
  let component: FlashcardGroupHighscoresComponent;
  let fixture: ComponentFixture<FlashcardGroupHighscoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupHighscoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupHighscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
