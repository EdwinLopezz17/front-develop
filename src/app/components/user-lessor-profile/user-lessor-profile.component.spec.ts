import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLessorProfileComponent } from './user-lessor-profile.component';

describe('UserLessorProfileComponent', () => {
  let component: UserLessorProfileComponent;
  let fixture: ComponentFixture<UserLessorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLessorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLessorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
