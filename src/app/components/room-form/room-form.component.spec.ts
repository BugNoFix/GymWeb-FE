import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFormComponent } from './room-form.component';

describe('RoomFormComponent', () => {
  let component: RoomFormComponent;
  let fixture: ComponentFixture<RoomFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomFormComponent]
    });
    fixture = TestBed.createComponent(RoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
