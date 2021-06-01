import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneAccountComponent } from './registrazione-account.component';

describe('RegistrazioneAccountComponent', () => {
  let component: RegistrazioneAccountComponent;
  let fixture: ComponentFixture<RegistrazioneAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrazioneAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrazioneAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
