import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOfExamplesComponent } from './room-of-examples.component';

describe('RoomOfExamplesComponent', () => {
  let component: RoomOfExamplesComponent;
  let fixture: ComponentFixture<RoomOfExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomOfExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomOfExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
