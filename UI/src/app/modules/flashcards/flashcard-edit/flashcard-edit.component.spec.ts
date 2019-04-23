import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardEditComponent } from './flashcard-edit.component';

describe('FlashcardEditComponent', () => {
  let component: FlashcardEditComponent;
  let fixture: ComponentFixture<FlashcardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
