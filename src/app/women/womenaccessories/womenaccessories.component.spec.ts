import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenaccessoriesComponent } from './womenaccessories.component';

describe('WomenaccessoriesComponent', () => {
  let component: WomenaccessoriesComponent;
  let fixture: ComponentFixture<WomenaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
