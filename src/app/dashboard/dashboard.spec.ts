import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: dashboard;
  let fixture: ComponentFixture<dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
