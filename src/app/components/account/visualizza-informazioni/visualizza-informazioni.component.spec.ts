import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaInformazioniComponent } from './visualizza-informazioni.component';

describe('VisualizzaInformazioniComponent', () => {
  let component: VisualizzaInformazioniComponent;
  let fixture: ComponentFixture<VisualizzaInformazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaInformazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaInformazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
