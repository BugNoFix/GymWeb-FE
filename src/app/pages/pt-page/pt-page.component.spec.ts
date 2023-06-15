import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtPageComponent } from './pt-page.component';

describe('PtPageComponent', () => {
  let component: PtPageComponent;
  let fixture: ComponentFixture<PtPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtPageComponent]
    });
    fixture = TestBed.createComponent(PtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
