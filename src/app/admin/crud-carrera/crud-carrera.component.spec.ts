import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCarreraComponent } from './crud-carrera.component';

describe('CrudCarreraComponent', () => {
  let component: CrudCarreraComponent;
  let fixture: ComponentFixture<CrudCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
