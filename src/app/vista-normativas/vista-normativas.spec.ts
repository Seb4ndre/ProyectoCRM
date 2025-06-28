import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNormativas } from './vista-normativas';

describe('VistaNormativas', () => {
  let component: VistaNormativas;
  let fixture: ComponentFixture<VistaNormativas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaNormativas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaNormativas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
