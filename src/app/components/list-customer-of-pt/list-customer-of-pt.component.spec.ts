import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerOfPtComponent } from './list-customer-of-pt.component';

describe('ListCustomerOfPtComponent', () => {
  let component: ListCustomerOfPtComponent;
  let fixture: ComponentFixture<ListCustomerOfPtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCustomerOfPtComponent]
    });
    fixture = TestBed.createComponent(ListCustomerOfPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
