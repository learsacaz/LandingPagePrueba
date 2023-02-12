import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMarcaComponent } from './la-marca.component';

describe('LaMarcaComponent', () => {
  let component: LaMarcaComponent;
  let fixture: ComponentFixture<LaMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
