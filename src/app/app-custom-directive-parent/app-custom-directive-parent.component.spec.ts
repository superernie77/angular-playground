import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomDirectiveParentComponent } from './app-custom-directive-parent.component';

describe('AppCustomDirectiveParentComponent', () => {
  let component: AppCustomDirectiveParentComponent;
  let fixture: ComponentFixture<AppCustomDirectiveParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomDirectiveParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCustomDirectiveParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
