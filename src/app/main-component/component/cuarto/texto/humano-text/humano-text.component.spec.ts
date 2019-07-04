import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanoTextComponent } from './humano-text.component';

describe('HumanoTextComponent', () => {
  let component: HumanoTextComponent;
  let fixture: ComponentFixture<HumanoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
