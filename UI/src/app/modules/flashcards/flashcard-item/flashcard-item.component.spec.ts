import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardItemComponent } from './flashcard-item.component';

describe('FlashcardItemComponent', () => {
  let component: FlashcardItemComponent;
  let fixture: ComponentFixture<FlashcardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
