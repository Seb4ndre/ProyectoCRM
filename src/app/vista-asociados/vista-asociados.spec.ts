import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAsociados } from './vista-asociados';

describe('VistaAsociados', () => {
  let component: VistaAsociados;
  let fixture: ComponentFixture<VistaAsociados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaAsociados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAsociados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
