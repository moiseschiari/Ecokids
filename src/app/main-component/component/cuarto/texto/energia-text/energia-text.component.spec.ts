import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaTextComponent } from './energia-text.component';

describe('EnergiaTextComponent', () => {
  let component: EnergiaTextComponent;
  let fixture: ComponentFixture<EnergiaTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergiaTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergiaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
