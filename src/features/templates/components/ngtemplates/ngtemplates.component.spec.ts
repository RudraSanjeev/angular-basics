import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplatesComponent } from './ngtemplates.component';

describe('NgtemplatesComponent', () => {
  let component: NgtemplatesComponent;
  let fixture: ComponentFixture<NgtemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgtemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
