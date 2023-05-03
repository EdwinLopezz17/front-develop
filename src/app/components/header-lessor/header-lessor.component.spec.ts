import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLessorComponent } from './header-lessor.component';

describe('HeaderLessorComponent', () => {
  let component: HeaderLessorComponent;
  let fixture: ComponentFixture<HeaderLessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
