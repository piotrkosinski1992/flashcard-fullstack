import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupItemComponent } from './flashcard-group-item.component';

describe('FlashcardGroupItemComponent', () => {
  let component: FlashcardGroupItemComponent;
  let fixture: ComponentFixture<FlashcardGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
