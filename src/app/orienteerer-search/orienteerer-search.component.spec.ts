import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrienteererSearchComponent } from './orienteerer-search.component';

describe('OrienteererSearchComponent', () => {
  let component: OrienteererSearchComponent;
  let fixture: ComponentFixture<OrienteererSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrienteererSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrienteererSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
