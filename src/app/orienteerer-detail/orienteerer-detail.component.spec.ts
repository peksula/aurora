import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrienteererDetailComponent } from './orienteerer-detail.component';

describe('OrienteererDetailComponent', () => {
  let component: OrienteererDetailComponent;
  let fixture: ComponentFixture<OrienteererDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrienteererDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrienteererDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
