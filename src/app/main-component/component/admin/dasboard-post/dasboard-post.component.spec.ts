import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardPostComponent } from './dasboard-post.component';

describe('DasboardPostComponent', () => {
  let component: DasboardPostComponent;
  let fixture: ComponentFixture<DasboardPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
