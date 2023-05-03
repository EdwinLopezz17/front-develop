import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementLessorComponent } from './advertisement-lessor.component';

describe('AdvertisementLessorComponent', () => {
  let component: AdvertisementLessorComponent;
  let fixture: ComponentFixture<AdvertisementLessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementLessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
