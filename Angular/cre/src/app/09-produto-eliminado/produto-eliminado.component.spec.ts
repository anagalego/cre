import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEliminadoComponent } from './produto-eliminado.component';

describe('ProdutoEliminadoComponent', () => {
  let component: ProdutoEliminadoComponent;
  let fixture: ComponentFixture<ProdutoEliminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoEliminadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
