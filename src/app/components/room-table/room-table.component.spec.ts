import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTableComponent } from './room-table.component';

describe('RoomTableComponent', () => {
  let component: RoomTableComponent;
  let fixture: ComponentFixture<RoomTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTableComponent]
    });
    fixture = TestBed.createComponent(RoomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
