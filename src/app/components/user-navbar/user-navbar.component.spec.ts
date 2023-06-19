import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserNavbarComponent} from './user-navbar.component';

describe('UserNavbarComponent', () => {
  let component: UserNavbarComponent;
  let fixture: ComponentFixture<UserNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNavbarComponent]
    });
    fixture = TestBed.createComponent(UserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
