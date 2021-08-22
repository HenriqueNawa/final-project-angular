import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorListComponent } from './realtor-list.component';

describe('RealtorListComponent', () => {
  let component: RealtorListComponent;
  let fixture: ComponentFixture<RealtorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
