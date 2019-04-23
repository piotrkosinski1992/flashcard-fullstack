import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsCreateComponent } from './flashcards-create.component';

describe('FlashcardsCreateComponent', () => {
  let component: FlashcardsCreateComponent;
  let fixture: ComponentFixture<FlashcardsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
