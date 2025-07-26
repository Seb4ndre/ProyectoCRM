import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperior } from './barra-superior';

describe('BarraSuperior', () => {
  let component: BarraSuperior;
  let fixture: ComponentFixture<BarraSuperior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraSuperior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSuperior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
