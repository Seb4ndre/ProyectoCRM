import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionAsociadosComponent } from './visualizacion-asociados.component';

describe('VisualizacionAsociadosComponent', () => {
  let component: VisualizacionAsociadosComponent;
  let fixture: ComponentFixture<VisualizacionAsociadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacionAsociadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
