import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FagenotfoundComponent } from './fagenotfound.component';

describe('FagenotfoundComponent', () => {
  let component: FagenotfoundComponent;
  let fixture: ComponentFixture<FagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
