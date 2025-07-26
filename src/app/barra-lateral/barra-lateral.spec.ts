import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateral } from './barra-lateral';

describe('BarraLateral', () => {
  let component: BarraLateral;
  let fixture: ComponentFixture<BarraLateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraLateral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLateral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
