import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFaturaComponent } from './criar-fatura.component';

describe('CriarFaturaComponent', () => {
  let component: CriarFaturaComponent;
  let fixture: ComponentFixture<CriarFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
