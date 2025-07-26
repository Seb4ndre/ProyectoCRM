import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPh } from './vista-ph';

describe('VistaPh', () => {
  let component: VistaPh;
  let fixture: ComponentFixture<VistaPh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaPh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
