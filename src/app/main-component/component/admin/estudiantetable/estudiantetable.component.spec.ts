import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantetableComponent } from './estudiantetable.component';

describe('EstudiantetableComponent', () => {
  let component: EstudiantetableComponent;
  let fixture: ComponentFixture<EstudiantetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
