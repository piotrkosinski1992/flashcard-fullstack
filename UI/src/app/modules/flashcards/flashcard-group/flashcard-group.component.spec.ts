import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupComponent } from './flashcard-group.component';

describe('FlashcardGroupComponent', () => {
  let component: FlashcardGroupComponent;
  let fixture: ComponentFixture<FlashcardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
