import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeasCoffeComponent } from './teas-coffe.component';

describe('TeasCoffeComponent', () => {
  let component: TeasCoffeComponent;
  let fixture: ComponentFixture<TeasCoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeasCoffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeasCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
