import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertebradosTextComponent } from './vertebrados-text.component';

describe('VertebradosTextComponent', () => {
  let component: VertebradosTextComponent;
  let fixture: ComponentFixture<VertebradosTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertebradosTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertebradosTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
