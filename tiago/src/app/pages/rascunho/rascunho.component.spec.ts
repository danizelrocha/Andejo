import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RascunhoComponent } from './rascunho.component';

describe('RascunhoComponent', () => {
  let component: RascunhoComponent;
  let fixture: ComponentFixture<RascunhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RascunhoComponent]
    });
    fixture = TestBed.createComponent(RascunhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
