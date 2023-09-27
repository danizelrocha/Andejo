import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoralComponent } from './autoral.component';

describe('AutoralComponent', () => {
  let component: AutoralComponent;
  let fixture: ComponentFixture<AutoralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoralComponent]
    });
    fixture = TestBed.createComponent(AutoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
