import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotSummaryComponent } from './pot-summary.component';

describe('PotSummaryComponent', () => {
  let component: PotSummaryComponent;
  let fixture: ComponentFixture<PotSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
