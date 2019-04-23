import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsUploadComponent } from './flashcards-upload.component';

describe('FlashcardsUploadComponent', () => {
  let component: FlashcardsUploadComponent;
  let fixture: ComponentFixture<FlashcardsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
