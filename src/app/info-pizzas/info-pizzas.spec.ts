import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPizzas } from './info-pizzas';

describe('InfoPizzas', () => {
  let component: InfoPizzas;
  let fixture: ComponentFixture<InfoPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
