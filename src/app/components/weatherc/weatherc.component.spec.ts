import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercComponent } from './weatherc.component';

describe('WeathercComponent', () => {
  let component: WeathercComponent;
  let fixture: ComponentFixture<WeathercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
