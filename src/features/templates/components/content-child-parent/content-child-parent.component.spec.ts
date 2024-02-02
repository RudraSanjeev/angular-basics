import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildParentComponent } from './content-child-parent.component';

describe('ContentChildParentComponent', () => {
  let component: ContentChildParentComponent;
  let fixture: ComponentFixture<ContentChildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
