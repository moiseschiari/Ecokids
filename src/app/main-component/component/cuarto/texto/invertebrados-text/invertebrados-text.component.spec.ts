import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertebradosTextComponent } from './invertebrados-text.component';

describe('InvertebradosTextComponent', () => {
  let component: InvertebradosTextComponent;
  let fixture: ComponentFixture<InvertebradosTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertebradosTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertebradosTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
