import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothingComponent } from './womenclothing.component';

describe('WomenclothingComponent', () => {
  let component: WomenclothingComponent;
  let fixture: ComponentFixture<WomenclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenclothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
