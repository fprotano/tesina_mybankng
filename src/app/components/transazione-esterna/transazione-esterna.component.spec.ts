import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneEsternaComponent } from './transazione-esterna.component';

describe('TransazioneEsternaComponent', () => {
  let component: TransazioneEsternaComponent;
  let fixture: ComponentFixture<TransazioneEsternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransazioneEsternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransazioneEsternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
