import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinGameComponent } from './spin-game.component';

describe('SpinGameComponent', () => {
  let component: SpinGameComponent;
  let fixture: ComponentFixture<SpinGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
