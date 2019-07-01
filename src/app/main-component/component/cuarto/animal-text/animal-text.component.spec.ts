import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTextComponent } from './animal-text.component';

describe('AnimalTextComponent', () => {
  let component: AnimalTextComponent;
  let fixture: ComponentFixture<AnimalTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
