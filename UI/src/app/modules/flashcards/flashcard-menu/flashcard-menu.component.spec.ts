import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardMenuComponent } from './flashcard-menu.component';

describe('FlashcardMenuComponent', () => {
  let component: FlashcardMenuComponent;
  let fixture: ComponentFixture<FlashcardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
