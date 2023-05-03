import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHeaderLessorComponent } from './second-header-lessor.component';

describe('SecondHeaderLessorComponent', () => {
  let component: SecondHeaderLessorComponent;
  let fixture: ComponentFixture<SecondHeaderLessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondHeaderLessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondHeaderLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
