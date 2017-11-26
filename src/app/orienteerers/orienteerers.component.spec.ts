import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrienteerersComponent } from './orienteerers.component';

describe('OrienteerersComponent', () => {
  let component: OrienteerersComponent;
  let fixture: ComponentFixture<OrienteerersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrienteerersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrienteerersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
