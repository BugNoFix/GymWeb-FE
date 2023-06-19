import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericHomePageComponent} from './generic-home-page.component';

describe('GenericHomePageComponent', () => {
  let component: GenericHomePageComponent;
  let fixture: ComponentFixture<GenericHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericHomePageComponent]
    });
    fixture = TestBed.createComponent(GenericHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
