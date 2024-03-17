import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Club1Component } from './club-1.component';

describe('Club1Component', () => {
  let component: Club1Component;
  let fixture: ComponentFixture<Club1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Club1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Club1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
