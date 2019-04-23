import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardGroupCreateComponent } from './flashcard-group-create.component';

describe('FlashcardGroupCreateComponent', () => {
  let component: FlashcardGroupCreateComponent;
  let fixture: ComponentFixture<FlashcardGroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardGroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
