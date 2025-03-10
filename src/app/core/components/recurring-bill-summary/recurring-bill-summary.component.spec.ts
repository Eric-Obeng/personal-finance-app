import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillSummaryComponent } from './recurring-bill-summary.component';

describe('RecurringBillSummaryComponent', () => {
  let component: RecurringBillSummaryComponent;
  let fixture: ComponentFixture<RecurringBillSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringBillSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringBillSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
