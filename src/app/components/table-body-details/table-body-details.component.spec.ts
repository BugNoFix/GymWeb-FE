import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyDetailsComponent } from './table-body-details.component';

describe('TableBodyDetailsComponent', () => {
  let component: TableBodyDetailsComponent;
  let fixture: ComponentFixture<TableBodyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBodyDetailsComponent]
    });
    fixture = TestBed.createComponent(TableBodyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
