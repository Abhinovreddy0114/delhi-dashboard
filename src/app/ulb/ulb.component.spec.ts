import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlbComponent } from './ulb.component';

describe('UlbComponent', () => {
  let component: UlbComponent;
  let fixture: ComponentFixture<UlbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UlbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
