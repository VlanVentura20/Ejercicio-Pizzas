import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPedirPizza } from './form-pedir-pizza';

describe('FormPedirPizza', () => {
  let component: FormPedirPizza;
  let fixture: ComponentFixture<FormPedirPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPedirPizza],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPedirPizza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
