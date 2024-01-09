import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenclothingComponent } from './menclothing.component';

describe('MenclothingComponent', () => {
  let component: MenclothingComponent;
  let fixture: ComponentFixture<MenclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenclothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
