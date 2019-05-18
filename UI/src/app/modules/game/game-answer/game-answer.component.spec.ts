import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAnswerComponent } from './game-answer.component';

describe('GameAnswerComponent', () => {
  let component: GameAnswerComponent;
  let fixture: ComponentFixture<GameAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
