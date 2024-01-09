import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaccessoriesComponent } from './menaccessories.component';

describe('MenaccessoriesComponent', () => {
  let component: MenaccessoriesComponent;
  let fixture: ComponentFixture<MenaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
