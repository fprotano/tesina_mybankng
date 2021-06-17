import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoEseguitoComponent } from './pagamento-eseguito.component';

describe('PagamentoEseguitoComponent', () => {
  let component: PagamentoEseguitoComponent;
  let fixture: ComponentFixture<PagamentoEseguitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoEseguitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoEseguitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
