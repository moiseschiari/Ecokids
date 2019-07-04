import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFungiComponent } from './modal-fungi.component';

describe('ModalFungiComponent', () => {
  let component: ModalFungiComponent;
  let fixture: ComponentFixture<ModalFungiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFungiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
