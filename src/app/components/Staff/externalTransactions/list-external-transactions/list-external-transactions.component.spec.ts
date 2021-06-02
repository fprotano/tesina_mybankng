import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExternalTransactionsComponent } from './list-external-transactions.component';

describe('ListExternalTransactionsComponent', () => {
  let component: ListExternalTransactionsComponent;
  let fixture: ComponentFixture<ListExternalTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExternalTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExternalTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
